// Style Customization Sidebar - May 9, 2026
// Allows users to customize colors, fonts, and highlight styles

import React, { useState } from 'react';
import { useResumeContext } from '../context/ResumeContext';

interface StyleCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StyleCustomizer: React.FC<StyleCustomizerProps> = ({ isOpen, onClose }) => {
  const { styleSettings, updateStyleSettings } = useResumeContext();
  
  const colorPresets = ['#a87830', '#2c3e50', '#3498db', '#e74c3c', '#27ae60'];
  const fonts = ['Inter', 'Playfair Display', 'Montserrat', 'Poppins', 'Roboto', 'Lato'];
  
  return (
    <div className={`fixed right-0 top-0 h-full w-80 bg-ink-deep shadow-xl transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gold-primary">Customize Style</h3>
        
        <div className="space-y-6">
          {/* Primary Color */}
          <div>
            <label className="block text-sm mb-2">Primary Color</label>
            <div className="flex gap-2">
              {colorPresets.map(color => (
                <button
                  key={color}
                  onClick={() => updateStyleSettings({ primaryColor: color })}
                  className={`w-8 h-8 rounded-full border-2 ${styleSettings.primaryColor === color ? 'border-white' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          
          {/* Heading Font */}
          <div>
            <label className="block text-sm mb-2">Heading Font</label>
            <select
              value={styleSettings.headingFont}
              onChange={(e) => updateStyleSettings({ headingFont: e.target.value })}
              className="w-full p-2 rounded-lg bg-ink-dark border border-gray-700 text-white"
            >
              {fonts.map(font => <option key={font} value={font}>{font}</option>)}
            </select>
          </div>
          
          {/* Body Font */}
          <div>
            <label className="block text-sm mb-2">Body Font</label>
            <select
              value={styleSettings.bodyFont}
              onChange={(e) => updateStyleSettings({ bodyFont: e.target.value })}
              className="w-full p-2 rounded-lg bg-ink-dark border border-gray-700 text-white"
            >
              {fonts.map(font => <option key={font} value={font}>{font}</option>)}
            </select>
          </div>
          
          {/* Highlight Color */}
          <div>
            <label className="block text-sm mb-2">Highlight Color</label>
            <input
              type="color"
              value={styleSettings.highlightColor}
              onChange={(e) => updateStyleSettings({ highlightColor: e.target.value })}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
        </div>
        
        <button onClick={onClose} className="mt-6 w-full py-2 rounded-lg bg-gold-primary text-ink-deep font-medium">
          Done
        </button>
      </div>
    </div>
  );
};
