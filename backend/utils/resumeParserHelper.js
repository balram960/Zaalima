// Week 4: Resume Parser Helper - May 3, 2026
// This helper extracts text from PDF/DOCX files for AI parsing

export const extractTextFromPDF = async (buffer) => {
  // Placeholder for PDF text extraction logic
  console.log('Extracting text from PDF...');
  return "Extracted text from PDF";
};

export const extractTextFromDOCX = async (buffer) => {
  // Placeholder for DOCX text extraction logic
  console.log('Extracting text from DOCX...');
  return "Extracted text from DOCX";
};

export const validateFileType = (fileName) => {
  const allowedExtensions = ['.pdf', '.docx'];
  const ext = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
  return allowedExtensions.includes(ext);
};

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
