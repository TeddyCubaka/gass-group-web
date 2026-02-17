import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message: "Please use /api/auth/callback/credentials for login via NextAuth",
  });
}
