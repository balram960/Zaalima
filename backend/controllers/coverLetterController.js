// Cover Letter Controller - May 17, 2026
// Handles AI-powered cover letter generation using Gemini

import { generateCoverLetter } from '../services/coverLetterAgent.js';

export const generateCoverLetterHandler = async (req, res) => {
  try {
    const { jobDescription, resumeData, companyName } = req.body;
    
    if (!jobDescription) {
      return res.status(400).json({ error: 'Job description is required' });
    }
    
    if (!resumeData) {
      return res.status(400).json({ error: 'Resume data is required' });
    }
    
    const result = await generateCoverLetter(jobDescription, resumeData, companyName);
    
    res.json({
      success: true,
      data: {
        content: result.content,
        latency: result.latency
      }
    });
    
  } catch (error) {
    console.error('Cover letter generation error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate cover letter',
      details: error.message 
    });
  }
};

export const saveCoverLetter = async (req, res) => {
  try {
    const { userId, content, jobDescription, companyName } = req.body;
    
    // Save to database logic here
    res.json({ success: true, message: 'Cover letter saved successfully' });
    
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
