// Week 4: Keyword Density Analyzer - May 5, 2026
// Analyzes keyword frequency and provides optimization suggestions

const STOP_WORDS = ['a', 'an', 'and', 'the', 'of', 'to', 'in', 'for', 'on', 'with', 'by', 'at', 'from', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'but', 'or', 'so', 'for', 'nor', 'yet'];

export const analyzeKeywordDensity = (text, keywords = []) => {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const totalWords = words.length;
  
  const frequency = {};
  words.forEach(word => {
    if (!STOP_WORDS.includes(word) && word.length > 2) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });
  
  const sortedKeywords = Object.entries(frequency)
    .map(([word, count]) => ({
      word,
      count,
      density: ((count / totalWords) * 100).toFixed(1),
      status: getDensityStatus((count / totalWords) * 100)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);
  
  const missingKeywords = keywords.filter(kw => 
    !text.toLowerCase().includes(kw.toLowerCase())
  );
  
  return {
    totalWords,
    topKeywords: sortedKeywords,
    missingKeywords,
    recommendations: generateDensityRecommendations(sortedKeywords, missingKeywords)
  };
};

const getDensityStatus = (density) => {
  if (density < 1) return 'low';
  if (density <= 3) return 'optimal';
  return 'overused';
};

const generateDensityRecommendations = (topKeywords, missingKeywords) => {
  const recs = [];
  const overused = topKeywords.filter(k => k.status === 'overused');
  if (overused.length > 0) {
    recs.push(`Reduce usage of: ${overused.map(k => k.word).join(', ')}`);
  }
  if (missingKeywords.length > 0) {
    recs.push(`Add these missing keywords: ${missingKeywords.slice(0, 5).join(', ')}`);
  }
  return recs;
};
