import { NextRequest, NextResponse } from "next/server";
import type { ContactFormPayload, ContactApiResponse } from "@/lib/types";

/**
 * POST /api/contact
 * Accepts contact form payload, validates required fields,
 * simulates sending data to Zoho. Returns success JSON; no redirect.
 * TODO: Replace mock logic with real Zoho integration when ready.
 */
export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body = (await request.json()) as Partial<ContactFormPayload>;
    const { fullName, email, message } = body;

    if (!fullName?.trim()) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }
    if (!email?.trim()) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }
    if (!message?.trim()) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }

    // Simulate sending to Zoho (no real integration yet)
    // In production, replace with Zoho CRM/Forms API call here.
    await new Promise((r) => setTimeout(r, 400));

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been received. We will respond as soon as possible.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
