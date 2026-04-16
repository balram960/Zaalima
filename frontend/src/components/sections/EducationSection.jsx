import { useDispatch, useSelector } from 'react-redux';
import {
  addEducation,
  removeEducation,
  updateEducation,
} from '@/store/resumeSlice';

export default function EducationSection() {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);

  const handleAdd = () => {
    dispatch(addEducation());
  };

  const handleRemove = (id) => {
    dispatch(removeEducation(id));
  };

  const handleChange = (id, field, value) => {
    dispatch(updateEducation({ id, field, value }));
  };

  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.id} className="p-3 bg-gray-800 rounded border border-gray-700 space-y-3">
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Degree (e.g., BS, MS)"
              value={edu.degree}
              onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
            />
            <input
              type="text"
              placeholder="Field of Study"
              value={edu.field}
              onChange={(e) => handleChange(edu.id, 'field', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="month"
              placeholder="Start Date"
              value={edu.startDate}
              onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
            />
            <input
              type="month"
              placeholder="End Date"
              value={edu.endDate}
              onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="GPA (optional)"
            value={edu.gpa}
            onChange={(e) => handleChange(edu.id, 'gpa', e.target.value)}
          />

          <button
            onClick={() => handleRemove(edu.id)}
            className="btn-secondary w-full"
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={handleAdd} className="btn-primary w-full">
        + Add Education
      </button>
    </div>
  );
}
