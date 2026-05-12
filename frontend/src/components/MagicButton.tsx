// Magic Button Component - AI Resume Rewriting
// Calls backend API to optimize bullet points with Gemini AI

import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface MagicButtonProps {
  bullet: string;
  onRewrite: (rewritten: string) => void;
  keywords?: string[];
}

export const MagicButton: React.FC<MagicButtonProps> = ({ bullet, onRewrite, keywords = [] }) => {
  const [loading, setLoading] = useState(false);

  const handleRewrite = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/ai/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bullet, keywords })
      });
      const data = await response.json();
      if (data.success) {
        onRewrite(data.data.rewritten);
      }
    } catch (error) {
      console.error('Magic Button error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRewrite}
      disabled={loading}
      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gradient-to-r from-gold-primary to-gold-dark rounded-lg text-white font-medium hover:scale-105 transition-transform disabled:opacity-50"
    >
      {loading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
      {loading ? 'Optimizing...' : 'Magic ✨'}
    </button>
  );
};
