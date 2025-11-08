import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import NotesClient from "@/components/NotesClient";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <p className="p-6">Please login</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Welcome, {session.user?.name}</h1>
      <p className="text-gray-600 mb-6">Email: {session.user?.email}</p>

      <NotesClient />
    </div>
  );
}
