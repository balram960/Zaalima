// Week 4: Cover Letter Templates - May 2, 2026
export const coverLetterPrompts = {
  standard: (jobDesc, company, name) => `Dear ${company || 'Hiring Manager'}, I am excited to apply...`,
  creative: (jobDesc, company, name) => `Hello ${company || 'Team'}! I would love to join...`
};

export const validateCoverLetterInput = (jobDesc, resumeData) => {
  if (!jobDesc) throw new Error('Job description required');
  if (!resumeData) throw new Error('Resume data required');
  return true;
};
