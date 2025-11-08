"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  const router = useRouter();

  const handleRedirect = (page: string) => {
    router.push(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to AI Notes
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Your AI-powered notebook. Save, organize, and generate notes smarter and faster.
        </p>
        <div className="flex justify-center gap-4">
          <Button  onClick={() => handleRedirect("/login")}>
            Login
          </Button>
          <Button  onClick={() => handleRedirect("/register")}>
            Register
          </Button>
          
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Notes</h3>
            <p>Automatically summarize, categorize, and generate notes using AI.</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p>Your notes are encrypted and private, accessible only by you.</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Easy Organization</h3>
            <p>Tag, search, and filter your notes quickly with an intuitive interface.</p>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Your Notes Preview</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((note) => (
            <Card key={note} className="p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Note Title {note}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quick note preview.
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      {/* <section className="py-16 px-6 text-center bg-indigo-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started with AI Notes Today</h2>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => handleRedirect("/login")}>
            Login
          </Button>
          <Button variant="outline" onClick={() => handleRedirect("/register")}>
            Register
          </Button>
        </div>
      </section> */}
    </div>
  );
}
