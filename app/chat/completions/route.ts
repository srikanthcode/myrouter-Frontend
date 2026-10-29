import { NextRequest } from "next/server";
import { handleV1, OPTIONS as v1Options } from "@/app/v1/[...path]/route";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  return handleV1(req, ["chat", "completions"]);
}

export async function OPTIONS() {
  return v1Options();
}
