import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    // <div className="min-h-screen bg-gray-50">
    //   <header className="border-b bg-white p-4 flex justify-between items-center">
    //     <h1 className="font-semibold text-lg">Protected Area</h1>
    //     <span className="text-gray-600 text-sm">
    //       {session.user?.email}
    //     </span>
    //   </header>
      <main className="p-6">{children}</main>
    // </div>
  );
}
