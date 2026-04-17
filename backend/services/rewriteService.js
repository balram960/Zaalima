import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.3,
});

export async function rewriteBullet(bulletText, keywords) {
  const startTime = Date.now();
  
  const prompt = `You are an expert resume writer. Rewrite the following resume bullet point to be:
1. More professional and impactful
2. ATS-friendly
3. Include these keywords naturally: ${keywords.join(", ")}

Original bullet point: "${bulletText}"

Return ONLY the rewritten bullet point (one sentence, no explanations):`;

  const response = await model.invoke(prompt);
  
  const latency = Date.now() - startTime;
  console.log(`[AI Rewrite] Rewrote bullet in ${latency}ms`);
  
  return {
    original: bulletText,
    rewritten: response.content.trim(),
    latency,
  };
}
