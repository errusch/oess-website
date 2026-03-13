import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

const DEFAULT_LEAD_INBOX_PATH = path.join(
  process.cwd(),
  "var",
  "lead-intake",
  "leads.jsonl",
);

const MAX_FIELD_LENGTH = 2000;

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  role?: unknown;
  companySize?: unknown;
  startingPoint?: unknown;
  tier?: unknown;
  bottleneck?: unknown;
  message?: unknown;
};

function normalizeRequired(value: unknown, fieldName: string) {
  if (typeof value !== "string") {
    throw new Error(`${fieldName} is required.`);
  }

  const trimmed = value.trim();

  if (!trimmed) {
    throw new Error(`${fieldName} is required.`);
  }

  if (trimmed.length > MAX_FIELD_LENGTH) {
    throw new Error(`${fieldName} is too long.`);
  }

  return trimmed;
}

function normalizeOptional(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  if (trimmed.length > MAX_FIELD_LENGTH) {
    throw new Error("A field is too long.");
  }

  return trimmed;
}

function getInboxPath() {
  return process.env.OESS_LEAD_INBOX_PATH || DEFAULT_LEAD_INBOX_PATH;
}

function getWebhookHeaders() {
  const secret = process.env.OESS_LEAD_WEBHOOK_SECRET;
  const headers: Record<string, string> = {};

  if (secret) {
    headers["x-oess-webhook-secret"] = secret;
    headers["x-make-apikey"] = secret;
  }

  return headers;
}

function isProduction() {
  return process.env.NODE_ENV === "production";
}

async function persistLeadToFile(lead: object) {
  const inboxPath = getInboxPath();
  await mkdir(path.dirname(inboxPath), { recursive: true });
  await appendFile(inboxPath, `${JSON.stringify(lead)}\n`, "utf8");
}

async function persistLeadToWebhook(lead: object) {
  const webhookUrl = process.env.OESS_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    if (isProduction()) {
      throw new Error(
        "Lead capture is not configured for production. Set OESS_LEAD_WEBHOOK_URL before accepting contact requests.",
      );
    }

    await persistLeadToFile(lead);
    return { destination: "file" as const };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getWebhookHeaders(),
    } satisfies Record<string, string>,
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error(`Lead webhook failed with status ${response.status}.`);
  }

  return { destination: "webhook" as const };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const lead = {
      id: `lead_${crypto.randomUUID()}`,
      submittedAt: new Date().toISOString(),
      name: normalizeRequired(payload.name, "Name"),
      email: normalizeRequired(payload.email, "Email"),
      role: normalizeOptional(payload.role),
      companySize: normalizeOptional(payload.companySize),
      startingPoint: normalizeOptional(payload.startingPoint ?? payload.tier),
      bottleneck:
        normalizeOptional(payload.bottleneck) ??
        normalizeRequired(payload.message, "Message"),
      message: normalizeRequired(payload.message, "Message"),
      source: "oess_website_contact_form",
      nextStep:
        "Review against OESS sales diagnostic and respond with assessment invite if qualified.",
      meta: {
        referer: request.headers.get("referer"),
        userAgent: request.headers.get("user-agent"),
        forwardedFor: request.headers.get("x-forwarded-for"),
      },
    };

    const result = await persistLeadToWebhook(lead);

    return NextResponse.json({ ok: true, leadId: lead.id, destination: result.destination });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to capture lead.";

    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
