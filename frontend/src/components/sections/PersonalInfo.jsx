import { useDispatch, useSelector } from 'react-redux';
import { updatePersonal } from '@/store/resumeSlice';

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.resume.personal);

  const handleChange = (field, value) => {
    dispatch(updatePersonal({ [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="First Name"
          value={personal.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={personal.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />
      </div>

      <input
        type="text"
        placeholder="Professional Title"
        value={personal.title}
        onChange={(e) => handleChange('title', e.target.value)}
      />

      <div className="grid grid-cols-2 gap-3">
        <input
          type="email"
          placeholder="Email"
          value={personal.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={personal.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </div>

      <input
        type="text"
        placeholder="Location"
        value={personal.location}
        onChange={(e) => handleChange('location', e.target.value)}
      />

      <input
        type="url"
        placeholder="LinkedIn URL"
        value={personal.linkedin}
        onChange={(e) => handleChange('linkedin', e.target.value)}
      />

      <input
        type="url"
        placeholder="Portfolio URL"
        value={personal.portfolio}
        onChange={(e) => handleChange('portfolio', e.target.value)}
      />
    </div>
  );
}
