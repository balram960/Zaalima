import { extractKeywords } from "../services/jdAgent.js";
import { rewriteBullet } from "../services/rewriteService.js";
import { calculateATSScore } from "../services/atsService.js";

export async function analyzeJD(req, res) {
  try {
    const { jobDescription } = req.body;
    
    if (!jobDescription) {
      return res.status(400).json({ 
        success: false, 
        error: "Job description is required" 
      });
    }
    
    const result = await extractKeywords(jobDescription);
    
    res.json({
      success: true,
      data: result,
    });
    
  } catch (error) {
    console.error("JD Analysis Error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to analyze job description",
      details: error.message 
    });
  }
}

export async function rewriteResumeBullet(req, res) {
  try {
    const { bullet, keywords } = req.body;
    
    if (!bullet) {
      return res.status(400).json({ 
        success: false, 
        error: "Bullet point is required" 
      });
    }
    
    if (!keywords || !keywords.length) {
      return res.status(400).json({ 
        success: false, 
        error: "Keywords are required" 
      });
    }
    
    const result = await rewriteBullet(bullet, keywords);
    
    res.json({
      success: true,
      data: result,
    });
    
  } catch (error) {
    console.error("Rewrite Error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to rewrite bullet point",
      details: error.message 
    });
  }
}

export async function getATSScore(req, res) {
  try {
    const { resumeText, keywords } = req.body;
    
    if (!resumeText) {
      return res.status(400).json({ 
        success: false, 
        error: "Resume text is required" 
      });
    }
    
    if (!keywords || !keywords.length) {
      return res.status(400).json({ 
        success: false, 
        error: "Keywords are required" 
      });
    }
    
    const result = calculateATSScore(resumeText, keywords);
    
    res.json({
      success: true,
      data: result,
    });
    
  } catch (error) {
    console.error("ATS Score Error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to calculate ATS score",
      details: error.message 
    });
  }
}
