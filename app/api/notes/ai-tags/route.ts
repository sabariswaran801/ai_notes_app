import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    if (!content || content.trim() === "") {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    const prompt = `
      You are an AI that generates concise, relevant tags for a note.
      Return 5–8 comma-separated tags that describe the main ideas of this text:
      "${content}"
    `;

    const response = await client.models.generateContent({
      model: "gemini-2.0-flash", 
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text = response.text;
    if (!text) {
      return NextResponse.json({ error: "No tags generated" }, { status: 500 });
    }

    const tags = text
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    return NextResponse.json({ result: tags });
  } catch (err) {
    console.error("AI Tags Error:", err);
    return NextResponse.json({ error: "AI tag generation failed" }, { status: 500 });
  }
}
