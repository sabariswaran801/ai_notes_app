// import { getServerSession } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "../../auth/[...nextauth]/route";
// import { PrismaClient } from "@/app/generated/prisma/client";
// const prisma = new PrismaClient();





// export async function DELETE(
//   req: NextRequest,
//   context: { params: Promise<{ id: string }> } // params is a Promise now
// ) {
//   const session = await getServerSession(authOptions);
//   if (!session?.user?.email) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   // Unwrap params
//   const params = await context.params;
//   const noteId = params.id;

//   if (!noteId) {
//     return NextResponse.json({ error: "Note ID is required" }, { status: 400 });
//   }

//   // Delete note if it belongs to the user
//   const deleted = await prisma.note.deleteMany({
//     where: { id: noteId, user: { email: session.user.email } },
//   });

//   if (deleted.count === 0) {
//     return NextResponse.json({ error: "Note not found or not yours" }, { status: 404 });
//   }

//   return NextResponse.json({ success: true });
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
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { PrismaClient } from "@/app/generated/prisma/client";
const prisma = new PrismaClient();
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const params = await context.params;
  const { title,content,tags } = await req.json();

  const updated = await prisma.note.updateMany({
    where: { id: params.id, user: { email: session.user.email } },
    data: { title, content,tags },
  });

  if (updated.count === 0) return NextResponse.json({ error: "Note not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const params = await context.params;
  const deleted = await prisma.note.deleteMany({
    where: { id: params.id, user: { email: session.user.email } },
  });

  if (deleted.count === 0) return NextResponse.json({ error: "Note not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
