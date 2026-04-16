import { useState } from 'react';
import PersonalInfo from '@/components/sections/PersonalInfo';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import SummarySection from '@/components/sections/SummarySection';

export default function FormPanel() {
  const [collapsed, setCollapsed] = useState({});

  const toggleSection = (section) => {
    setCollapsed((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', component: PersonalInfo },
    { id: 'summary', label: 'Professional Summary', component: SummarySection },
    { id: 'experience', label: 'Experience', component: ExperienceSection },
    { id: 'education', label: 'Education', component: EducationSection },
    { id: 'skills', label: 'Skills', component: SkillsSection },
  ];

  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-display text-forge-gold mb-6">Edit Resume</h2>

      {sections.map(({ id, label, component: Component }) => (
        <div key={id} className="section-card">
          <button
            onClick={() => toggleSection(id)}
            className="w-full flex justify-between items-center mb-3 hover:text-forge-gold"
          >
            <h3 className="text-lg font-semibold">{label}</h3>
            <span className="text-gray-400">{collapsed[id] ? '▼' : '▲'}</span>
          </button>
          {!collapsed[id] && (
            <div className="border-t border-gray-700 pt-4">
              <Component />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
