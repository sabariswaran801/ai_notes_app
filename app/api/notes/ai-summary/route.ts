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
Summarize the following note in 2-3 sentences.
Return ONLY the summary — do not include explanations or titles.

Text:
${content}
`;

    const response = await client.models.generateContent({
      model: "gemini-2.0-flash", 
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const summary = response.text|| "No summary generated.";

    return NextResponse.json({ result: summary });
  } catch (err) {
    console.error("Gemini Summary Error:", err);
    return NextResponse.json({ error: "Gemini summary failed" }, { status: 500 });
  }
}
