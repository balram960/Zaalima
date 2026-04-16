import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markSaved } from '@/store/resumeSlice';
import ResumeBuilder from '@/components/ResumeBuilder';

function App() {
  const dispatch = useDispatch();
  const { isDirty, userId } = useSelector((state) => state.resume);
  const [lastAutoSave, setLastAutoSave] = useState(Date.now());

  // Auto-save every 30 seconds if dirty
  useEffect(() => {
    if (!isDirty) return;

    const timer = setInterval(() => {
      const resume = useSelector((state) => state.resume);
      fetch('/api/resume/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resume),
      })
        .then(() => {
          dispatch(markSaved());
          setLastAutoSave(Date.now());
        })
        .catch((err) => console.error('Auto-save failed:', err));
    }, 30000); // 30 seconds

    return () => clearInterval(timer);
  }, [isDirty, dispatch]);

  return (
    <div className="min-h-screen bg-deep-ink">
      <ResumeBuilder />
    </div>
  );
}

export default App;
