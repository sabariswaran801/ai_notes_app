// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@/app/generated/prisma/client";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
// const prisma = new PrismaClient();

// export async function POST(req: NextRequest) {
//   const session = await getServerSession(authOptions);
//   if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   const body = await req.json();
//   const note = await prisma.note.create({
//     data: {
//       title: body.title,
//       content: body.content,
//       tags: body.tags || [],
//       user: { connect: { email: session.user.email } },
//     },
//   });

//   return NextResponse.json(note);
// }
// export async function GET() {
//   const session = await getServerSession(authOptions);
//   if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   const notes = await prisma.note.findMany({
//     where: { user: { email: session.user.email } },
//     orderBy: { updatedAt: "desc" },
//   });

//   return NextResponse.json(notes);
// }


// export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
//   const session = await getServerSession(authOptions);
//   if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   const body = await req.json();

//   const note = await prisma.note.updateMany({
//     where: { id: params.id, user: { email: session.user.email } },
//     data: {
//       title: body.title,
//       content: body.content,
//       tags: body.tags || [],
//     },
//   });

//   return NextResponse.json(note);
// }
// export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
//   const session = await getServerSession(authOptions);
//   if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   await prisma.note.deleteMany({
//     where: { id: params.id, user: { email: session.user.email } },
//   });

//   return NextResponse.json({ success: true });
// }
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json([], { status: 401 });

  const notes = await prisma.note.findMany({
    where: { user: { email: session.user.email } },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content } = await req.json();
  const note = await prisma.note.create({
    data: { title, content, tags: [], user: { connect: { email: session.user.email } } },
  });

  return NextResponse.json(note);
}
