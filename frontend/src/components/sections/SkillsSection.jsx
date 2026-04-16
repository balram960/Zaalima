import { useDispatch, useSelector } from 'react-redux';
import { updateSkills } from '@/store/resumeSlice';
import TagInput from '@/components/common/TagInput';

export default function SkillsSection() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);

  const handleSkillsChange = (category, tags) => {
    dispatch(updateSkills({ category, tags }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Technical Skills</label>
        <TagInput
          tags={skills.technical}
          onTagsChange={(tags) => handleSkillsChange('technical', tags)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Soft Skills</label>
        <TagInput
          tags={skills.soft}
          onTagsChange={(tags) => handleSkillsChange('soft', tags)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tools & Frameworks</label>
        <TagInput
          tags={skills.tools}
          onTagsChange={(tags) => handleSkillsChange('tools', tags)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Languages</label>
        <TagInput
          tags={skills.languages}
          onTagsChange={(tags) => handleSkillsChange('languages', tags)}
        />
      </div>
    </div>
  );
}
