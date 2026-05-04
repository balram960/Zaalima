// Week 4: Networking Email Controller - May 5, 2026
// Generates cold emails using Gemini AI

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.7,
});

export async function generateNetworkingEmail(req, res) {
  try {
    const { companyName, jobTitle, hiringManagerName, jobDescription, emailType } = req.body;
    
    if (!companyName || !jobTitle) {
      return res.status(400).json({ error: "Company name and job title are required" });
    }
    
    const prompt = `Generate a professional cold email for a job seeker.
Company: ${companyName}
Job Title: ${jobTitle}
${hiringManagerName ? `Hiring Manager: ${hiringManagerName}` : ''}
Type: ${emailType || 'recruiter'}
Job Description Context: ${jobDescription?.substring(0, 500) || 'Not provided'}

The email should be concise, professional, and include:
1. Subject line
2. Proper greeting
3. Interest in the role
4. Key qualifications (ask candidate to insert)
5. Call to action
6. Professional sign-off

Return JSON format: { subject, body }`;

    const response = await model.invoke(prompt);
    let result;
    try {
      result = JSON.parse(response.content);
    } catch {
      result = { subject: "Job Application", body: response.content };
    }
    
    res.json({ success: true, data: result });
    
  } catch (error) {
    console.error("Networking Email Error:", error);
    res.status(500).json({ error: "Failed to generate email" });
  }
}
