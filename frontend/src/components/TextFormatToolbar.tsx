// Text Formatting Toolbar - May 9, 2026
// Bold, Italic, Highlight buttons for text selection

import React from 'react';
import { Bold, Italic, Highlighter } from 'lucide-react';

interface TextFormatToolbarProps {
  onFormat: (command: string) => void;
}

export const TextFormatToolbar: React.FC<TextFormatToolbarProps> = ({ onFormat }) => {
  return (
    <div className="absolute top-0 right-0 flex gap-1 bg-ink-deep rounded-lg p-1 shadow-lg border border-gray-700">
      <button
        onClick={() => onFormat('bold')}
        className="p-2 hover:bg-gold-primary/20 rounded transition"
        title="Bold"
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => onFormat('italic')}
        className="p-2 hover:bg-gold-primary/20 rounded transition"
        title="Italic"
      >
        <Italic size={16} />
      </button>
      <button
        onClick={() => onFormat('highlight')}
        className="p-2 hover:bg-gold-primary/20 rounded transition"
        title="Highlight"
      >
        <Highlighter size={16} />
      </button>
    </div>
  );
};
