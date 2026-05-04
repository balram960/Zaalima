// Week 4: Networking Routes - May 5, 2026
// API routes for networking email generation

import express from 'express';
import { generateNetworkingEmail } from '../controllers/networkingController.js';

const router = express.Router();

// POST /api/networking/email - Generate cold email
router.post('/email', generateNetworkingEmail);

// POST /api/networking/email/bulk - Generate multiple email variations
router.post('/email/bulk', async (req, res) => {
  const { companyName, jobTitle, hiringManagerName, jobDescription } = req.body;
  
  const types = ['recruiter', 'hiringManager', 'referral'];
  const results = [];
  
  for (const type of types) {
    const response = await fetch(`http://localhost:5000/api/networking/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ companyName, jobTitle, hiringManagerName, jobDescription, emailType: type })
    });
    const data = await response.json();
    results.push({ type, ...data.data });
  }
  
  res.json({ success: true, data: results });
});

export default router;
