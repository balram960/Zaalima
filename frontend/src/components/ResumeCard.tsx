// Premium Resume Card - May 9, 2026
// Dashboard card with ATS score, actions, and glassmorphism

import React from 'react';
import { FileText, Download, Copy, Trash2 } from 'lucide-react';

interface ResumeCardProps {
  id: string;
  title: string;
  lastEdited: string;
  atsScore: number;
  onEdit: () => void;
  onDownload: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  title, lastEdited, atsScore, onEdit, onDownload, onDuplicate, onDelete
}) => {
  const getScoreColor = (score: number) => {
    if (score < 50) return 'text-red-500';
    if (score < 75) return 'text-yellow-500';
    return 'text-green-500';
  };
  
  return (
    <div className="group relative bg-gradient-to-br from-ink-deep to-ink-dark rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <FileText className="text-gold-primary" size={24} />
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-gray-500">Edited {lastEdited}</p>
          </div>
        </div>
        <div className={`text-lg font-bold ${getScoreColor(atsScore)}`}>
          {atsScore}%
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <button onClick={onEdit} className="p-2 bg-gold-primary rounded-lg hover:bg-gold-dark transition">Edit</button>
        <button onClick={onDownload} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"><Download size={16} /></button>
        <button onClick={onDuplicate} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"><Copy size={16} /></button>
        <button onClick={onDelete} className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition"><Trash2 size={16} /></button>
      </div>
    </div>
  );
};
