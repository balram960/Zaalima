// Week 4: Detailed ATS Scoring Service - May 5, 2026
// Calculates comprehensive ATS scores with actionable insights

export const calculateDetailedATSScore = (resumeText, jobDescription, keywords) => {
  const contentScore = calculateContentScore(resumeText, keywords);
  const formatScore = calculateFormatScore(resumeText);
  const grammarScore = calculateGrammarScore(resumeText);
  const designScore = calculateDesignScore(resumeText);
  
  const overallScore = Math.round(
    (contentScore * 0.5) + 
    (formatScore * 0.25) + 
    (grammarScore * 0.15) + 
    (designScore * 0.1)
  );
  
  return {
    overall: overallScore,
    content: contentScore,
    format: formatScore,
    grammar: grammarScore,
    design: designScore,
    recommendations: generateRecommendations(contentScore, formatScore, grammarScore, designScore)
  };
};

const calculateContentScore = (resumeText, keywords) => {
  if (!keywords || keywords.length === 0) return 0;
  let matched = 0;
  keywords.forEach(kw => {
    if (resumeText.toLowerCase().includes(kw.toLowerCase())) matched++;
  });
  return Math.round((matched / keywords.length) * 100);
};

const calculateFormatScore = (text) => {
  let score = 100;
  const hasBulletPoints = text.includes('•') || text.includes('-');
  if (!hasBulletPoints) score -= 20;
  const hasNumbers = /\d+/.test(text);
  if (!hasNumbers) score -= 15;
  return Math.max(0, score);
};

const calculateGrammarScore = (text) => {
  let score = 100;
  const errors = ['  ', 'teh', 'recieve', 'adress', 'acheive', 'definately', 'seperate'];
  errors.forEach(err => {
    if (text.toLowerCase().includes(err)) score -= 10;
  });
  return Math.max(0, score);
};

const calculateDesignScore = (text) => {
  let score = 100;
  if (text.length < 500) score -= 20;
  if (text.length > 2000) score -= 10;
  return Math.max(0, score);
};

const generateRecommendations = (content, format, grammar, design) => {
  const recs = [];
  if (content < 70) recs.push("Add more keywords from the job description");
  if (format < 70) recs.push("Use bullet points and quantify achievements with numbers");
  if (grammar < 70) recs.push("Run spell check and fix common typos");
  if (design < 70) recs.push("Ensure consistent formatting and adequate length");
  return recs;
};
