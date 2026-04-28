import { NextRequest, NextResponse } from "next/server";
import type { ContactFormPayload, ContactApiResponse } from "@/lib/types";
import { submitNetworkContactToZoho } from "@/lib/zoho";

/**
 * POST /api/contact
 * Accepts contact form payload, validates required fields,
 * sends data to Zoho Creator, and returns JSON response.
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body = (await request.json()) as Partial<ContactFormPayload>;
    const fullName = body.fullName?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const companyName = body.companyName?.trim() || "";
    const message = body.message?.trim() || "";

    if (!fullName) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }

    await submitNetworkContactToZoho({
      fullName,
      email,
      phone,
      companyName,
      message,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your message has been received. We will respond as soon as possible.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}