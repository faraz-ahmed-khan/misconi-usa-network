import { NextResponse } from "next/server";
import { MOCK_RESOURCES } from "@/lib/mock-data";
import type { ResourcesResponse } from "@/lib/types";

/**
 * GET /api/resources
 * Returns mock resources grouped into articles, guides, videos, glossary, faq.
 */
export async function GET(): Promise<NextResponse<ResourcesResponse>> {
  return NextResponse.json(MOCK_RESOURCES);
}
