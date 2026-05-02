// Week 3: PDF Configuration - May 2, 2026
export const pdfConfig = {
  format: 'A4',
  margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
  printBackground: true,
  landscape: false
};

export const validatePDFData = (resumeData) => {
  if (!resumeData) throw new Error('Resume data required');
  return true;
};
