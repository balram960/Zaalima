import { useDispatch, useSelector } from 'react-redux';
import {
  addProject,
  removeProject,
  updateProject,
} from '@/store/resumeSlice';
import TagInput from '@/components/common/TagInput';

export default function ProjectsSection() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.resume.projects);

  const handleAdd = () => {
    dispatch(addProject());
  };

  const handleRemove = (id) => {
    dispatch(removeProject(id));
  };

  const handleChange = (id, field, value) => {
    dispatch(updateProject({ id, field, value }));
  };

  return (
    <div className="space-y-4">
      {projects.map((proj) => (
        <div key={proj.id} className="p-3 bg-gray-800 rounded border border-gray-700 space-y-3">
          <input
            type="text"
            placeholder="Project Name"
            value={proj.name}
            onChange={(e) => handleChange(proj.id, 'name', e.target.value)}
          />

          <textarea
            placeholder="Project Description"
            value={proj.description}
            onChange={(e) => handleChange(proj.id, 'description', e.target.value)}
            className="w-full h-16 resize-none"
          />

          <div>
            <label className="block text-xs font-medium mb-2">Technologies</label>
            <TagInput
              tags={proj.technologies}
              onTagsChange={(tags) => handleChange(proj.id, 'technologies', tags)}
            />
          </div>

          <input
            type="url"
            placeholder="Project Link"
            value={proj.link}
            onChange={(e) => handleChange(proj.id, 'link', e.target.value)}
          />

          <button
            onClick={() => handleRemove(proj.id)}
            className="btn-secondary w-full"
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={handleAdd} className="btn-primary w-full">
        + Add Project
      </button>
    </div>
  );
}
