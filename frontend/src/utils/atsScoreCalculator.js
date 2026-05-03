// Week 4: Detailed ATS Score Calculator - May 3, 2026
// Calculates 4 separate ATS scores for resume optimization

export const calculateContentScore = (resumeText, keywords) => {
  if (!keywords || keywords.length === 0) return 0;
  let matched = 0;
  keywords.forEach(keyword => {
    if (resumeText.toLowerCase().includes(keyword.toLowerCase())) matched++;
  });
  return Math.round((matched / keywords.length) * 50);
};

export const calculateFormatScore = (resumeHtml) => {
  let score = 25;
  // Check for common ATS issues
  if (resumeHtml.includes('<table')) score -= 10;
  if (resumeHtml.includes('colspan')) score -= 5;
  if (resumeHtml.includes('position: absolute')) score -= 5;
  if (resumeHtml.includes('font-size: 8pt')) score -= 5;
  return Math.max(0, score);
};

export const calculateGrammarScore = (resumeText) => {
  let score = 15;
  const commonErrors = ['teh', 'recieve', 'adress', 'acheive', 'definately'];
  commonErrors.forEach(error => {
    if (resumeText.toLowerCase().includes(error)) score -= 3;
  });
  return Math.max(0, score);
};

export const calculateDesignScore = (resumeHtml) => {
  let score = 10;
  if (resumeHtml.includes('line-height: 1.5')) score += 2;
  if (resumeHtml.includes('margin')) score += 2;
  if (resumeHtml.includes('font-family')) score += 2;
  return Math.min(10, score);
};

export const getOverallATSScore = (scores) => {
  return Math.round(
    (scores.contentScore || 0) +
    (scores.formatScore || 0) +
    (scores.grammarScore || 0) +
    (scores.designScore || 0)
  );
};

export const getScoreColor = (score) => {
  if (score < 40) return 'red';
  if (score < 70) return 'yellow';
  return 'green';
};

export const getScoreRecommendation = (score, category) => {
  if (score < 40) return `Your ${category} score needs significant improvement.`;
  if (score < 70) return `Your ${category} score is good. Keep improving!`;
  return `Excellent ${category} score! You're doing great.`;
};
