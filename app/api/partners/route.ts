import { NextResponse } from "next/server";
import { MOCK_PARTNERS } from "@/lib/mock-data";
import type { Partner } from "@/lib/types";

/**
 * GET /api/partners
 * Returns mock partner or ecosystem logo items.
 */
export async function GET(): Promise<NextResponse<Partner[]>> {
  return NextResponse.json(MOCK_PARTNERS);
}
