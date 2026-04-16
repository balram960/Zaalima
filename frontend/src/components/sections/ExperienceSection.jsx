import { useDispatch, useSelector } from 'react-redux';
import {
  addExperience,
  removeExperience,
  updateExperience,
} from '@/store/resumeSlice';

export default function ExperienceSection() {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.resume.experience);

  const handleAdd = () => {
    dispatch(addExperience());
  };

  const handleRemove = (id) => {
    dispatch(removeExperience(id));
  };

  const handleChange = (id, field, value) => {
    dispatch(updateExperience({ id, field, value }));
  };

  return (
    <div className="space-y-4">
      {experience.map((exp) => (
        <div key={exp.id} className="p-3 bg-gray-800 rounded border border-gray-700 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
            />
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Location"
            value={exp.location}
            onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="month"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
            />
            <input
              type="month"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
              disabled={exp.current}
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={exp.current}
              onChange={(e) => handleChange(exp.id, 'current', e.target.checked)}
              className="w-4 h-4"
            />
            Currently working here
          </label>

          <textarea
            placeholder="Achievements (one per line)"
            value={exp.achievements.join('\n')}
            onChange={(e) =>
              handleChange(
                exp.id,
                'achievements',
                e.target.value.split('\n').filter((a) => a.trim())
              )
            }
            className="w-full h-16 resize-none"
          />

          <button
            onClick={() => handleRemove(exp.id)}
            className="btn-secondary w-full"
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={handleAdd} className="btn-primary w-full">
        + Add Experience
      </button>
    </div>
  );
}
