import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ contacts: [] });
    }

    const contacts = await prisma.contactRequest.findMany({
      where: { email: session.user.email },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("User contacts fetch error:", error);
    return NextResponse.json({ contacts: [] });
  }
}
