import { useSelector } from 'react-redux';

export default function LivePreview() {
  const resume = useSelector((state) => state.resume);
  const { personal, summary, experience, education, skills, projects } = resume;

  return (
    <div className="bg-white text-black p-12 rounded-lg shadow-2xl font-serif max-w-4xl mx-auto" style={{ minHeight: '1100px' }}>
      {/* Header */}
      <div className="mb-8 pb-6 border-b-2 border-gray-300">
        <h1 className="text-4xl font-bold font-display mb-1">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-lg text-gray-600 mb-3">{personal.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold font-display mb-3 text-gray-900">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold font-display mb-4 text-gray-900">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-gray-600 text-sm">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600">{exp.company} • {exp.location}</p>
                {exp.achievements.length > 0 && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="list-disc text-gray-700 text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold font-display mb-4 text-gray-900">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-600">{edu.institution}</p>
                {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {Object.values(skills).some((s) => s.length > 0) && (
        <div className="mb-8">
          <h2 className="text-xl font-bold font-display mb-4 text-gray-900">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.technical.length > 0 && (
              <div>
                <p className="font-bold text-gray-900 text-sm mb-2">Technical</p>
                <p className="text-gray-700 text-sm">{skills.technical.join(', ')}</p>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <p className="font-bold text-gray-900 text-sm mb-2">Soft Skills</p>
                <p className="text-gray-700 text-sm">{skills.soft.join(', ')}</p>
              </div>
            )}
            {skills.tools.length > 0 && (
              <div>
                <p className="font-bold text-gray-900 text-sm mb-2">Tools</p>
                <p className="text-gray-700 text-sm">{skills.tools.join(', ')}</p>
              </div>
            )}
            {skills.languages.length > 0 && (
              <div>
                <p className="font-bold text-gray-900 text-sm mb-2">Languages</p>
                <p className="text-gray-700 text-sm">{skills.languages.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold font-display mb-4 text-gray-900">Projects</h2>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="font-bold text-gray-900">{proj.name}</h3>
                <p className="text-gray-700 text-sm">{proj.description}</p>
                {proj.technologies.length > 0 && (
                  <p className="text-gray-600 text-sm mt-1">
                    <span className="font-semibold">Technologies:</span> {proj.technologies.join(', ')}
                  </p>
                )}
                {proj.link && <p className="text-gray-600 text-sm">{proj.link}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
