export const dynamic = "force-dynamic"; // defaults to auto
import prisma from "lib/prisma";
import { NextResponse } from "next/server";

// GET /api/user
export async function GET(request: Request) {
  console.log("GET request received");
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

// POST /api/user
export async function POST(request: Request) {
  const { name, score } = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name,
      score,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
