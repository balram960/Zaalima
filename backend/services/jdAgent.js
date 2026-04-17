import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.3,
});

export async function extractKeywords(jdText) {
  const startTime = Date.now();
  
  const prompt = `Extract the most important ATS keywords (skills, technologies, qualifications) from this job description.
  
Return ONLY a comma-separated list of keywords. No explanations, no numbering.

Job Description:
${jdText}`;

  const response = await model.invoke(prompt);
  const keywords = response.content.split(",").map(k => k.trim().toLowerCase());
  
  const latency = Date.now() - startTime;
  console.log(`[JD Agent] Extracted ${keywords.length} keywords in ${latency}ms`);
  
  return { keywords, latency };
}
