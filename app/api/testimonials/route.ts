import { NextResponse } from "next/server";
import { MOCK_TESTIMONIALS } from "@/lib/mock-data";
import type { Testimonial } from "@/lib/types";

/**
 * GET /api/testimonials
 * Returns mock testimonial list.
 */
export async function GET(): Promise<NextResponse<Testimonial[]>> {
  return NextResponse.json(MOCK_TESTIMONIALS);
}
