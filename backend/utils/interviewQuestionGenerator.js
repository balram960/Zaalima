// Week 4: Interview Question Generator - May 3, 2026
// Generates interview questions based on job description

export const questionCategories = {
  technical: [
    "Explain a complex technical problem you solved recently.",
    "How do you stay updated with the latest technologies?",
    "Describe your experience with [Key Technology].",
    "How would you approach debugging a production issue?"
  ],
  behavioral: [
    "Tell me about a time you led a team through a difficult project.",
    "Describe a situation where you had to handle conflict at work.",
    "How do you prioritize tasks when facing multiple deadlines?",
    "Share an example of a failure and what you learned from it."
  ],
  situational: [
    "How would you handle a missed deadline?",
    "What would you do if you disagreed with a manager's decision?",
    "How would you onboard yourself into this role in the first 30 days?",
    "Describe how you would improve one of our current products."
  ],
  roleSpecific: (role) => `What interests you about the ${role} role specifically?`
};

export const generateQuestionPrompt = (jobDescription, category) => {
  return `Based on this job description: ${jobDescription.substring(0, 500)}...
Generate 3 ${category} interview questions.`;
};
