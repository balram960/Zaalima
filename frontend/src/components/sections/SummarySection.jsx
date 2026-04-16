import { useDispatch, useSelector } from 'react-redux';
import { updateSummary } from '@/store/resumeSlice';

export default function SummarySection() {
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.resume.summary);

  const handleChange = (value) => {
    dispatch(updateSummary(value));
  };

  return (
    <div className="space-y-2">
      <textarea
        placeholder="Write a brief professional summary (max 500 characters)"
        value={summary}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full h-24 resize-none"
        maxLength={500}
      />
      <p className="text-xs text-gray-500">{summary.length}/500</p>
    </div>
  );
}
