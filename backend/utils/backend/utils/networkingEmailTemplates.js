// Week 4: Networking Email Templates - May 3, 2026
// Templates for cold emails to recruiters and hiring managers

export const emailTemplates = {
  recruiterCold: (company, jobTitle, name) => `
Subject: Application for ${jobTitle} position at ${company}

Dear Recruiting Team at ${company},

I am writing to express my strong interest in the ${jobTitle} position at ${company}.

With my background in [Your Field] and passion for [Industry], I believe I would be a valuable addition to your team.

I would welcome the opportunity to discuss how my skills align with your needs.

Best regards,
${name || 'Candidate'}
  `,

  hiringManagerDirect: (company, jobTitle, name, connection) => `
Subject: ${jobTitle} opportunity at ${company}

Dear Hiring Manager,

I've been following ${company}'s work in [Industry/Field] and was excited to see the ${jobTitle} opening.

${connection ? `As we discussed at ${connection},` : ''} I am confident that my experience in [Key Skill] would bring immediate value to your team.

May I schedule a brief call to discuss further?

Thank you,
${name || 'Candidate'}
  `,

  referralRequest: (company, jobTitle, name, referrer) => `
Subject: Referral request for ${jobTitle} at ${company}

Dear ${referrer || 'Team'},

I hope this message finds you well.

I am reaching out because I noticed ${company} has an opening for a ${jobTitle} that aligns perfectly with my skills.

Would you be open to referring me or providing any advice on the application process?

I would greatly appreciate your support.

Best,
${name || 'Candidate'}
  `
};
