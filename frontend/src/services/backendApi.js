// API Service for Backend Connection - May 6, 2026
// Connects Lovable frontend to existing Node.js backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const backendApi = {
  // Authentication
  register: async (userData) => {
    const res = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return res.json();
  },

  login: async (credentials) => {
    const res = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return res.json();
  },

  // AI Features
  analyzeJD: async (jobDescription) => {
    const res = await fetch(`${API_BASE_URL}/ai/analyze-jd`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription })
    });
    return res.json();
  },

  rewriteBullet: async (bullet, keywords) => {
    const res = await fetch(`${API_BASE_URL}/ai/rewrite`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bullet, keywords })
    });
    return res.json();
  },

  getATSScore: async (resumeText, keywords) => {
    const res = await fetch(`${API_BASE_URL}/ai/ats-score`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumeText, keywords })
    });
    return res.json();
  },

  generatePDF: async (resumeData) => {
    const res = await fetch(`${API_BASE_URL}/pdf/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumeData })
    });
    return res.blob();
  },

  generateCoverLetter: async (jobDescription, resumeData, companyName) => {
    const res = await fetch(`${API_BASE_URL}/cover-letter/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription, resumeData, companyName })
    });
    return res.json();
  },

  // Resume CRUD
  saveResume: async (resumeData, token) => {
    const res = await fetch(`${API_BASE_URL}/resume/save`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(resumeData)
    });
    return res.json();
  },

  getUserResumes: async (userId, token) => {
    const res = await fetch(`${API_BASE_URL}/resume/user/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return res.json();
  }
};
