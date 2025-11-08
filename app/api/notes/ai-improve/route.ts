import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    if (!content || content.trim() === "") {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

  const prompt = `
  Correct any grammar or clarity issues in this text, 
  but return ONLY the improved version — no explanations.
  
  Text: "${content}"
  `;
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", 
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const improved = response.text || content;

    return NextResponse.json({ result: improved });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Gemini API failed" }, { status: 500 });
  }
}
