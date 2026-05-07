// JSON Resume Template Adapter - May 7, 2026
// Integrates professional JSON Resume themes into CareerForge Pro

import classyTheme from '@jsonresume/jsonresume-theme-class';
import eloquentTheme from 'jsonresume-theme-eloquent-ru';
import compactTheme from '@warleon/jsonresume-theme-compact';
import paperTheme from 'jsonresume-theme-paper';
import rocketTheme from 'jsonresume-theme-rocketspacer';

export const templates = {
  classy: { name: 'Classy', category: 'Executive', render: classyTheme.render },
  eloquent: { name: 'Eloquent', category: 'Modern', render: eloquentTheme.render },
  compact: { name: 'Compact', category: 'Technical', render: compactTheme.render },
  paper: { name: 'Paper', category: 'Academic', render: paperTheme.render },
  rocket: { name: 'Rocket', category: 'Creative', render: rocketTheme.render }
};

export function convertToJSONResume(data: any) { /* converts app resume data to JSON Resume schema */ }
export function renderResumeWithTemplate(templateId: string, data: any) { /* returns HTML string */ }
