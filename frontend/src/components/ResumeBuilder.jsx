import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormPanel from '@/components/FormPanel';
import LivePreview from '@/components/LivePreview';
import { markSaved } from '@/store/resumeSlice';

export default function ResumeBuilder() {
  const dispatch = useDispatch();
  const [isSaving, setIsSaving] = useState(false);
  const { isDirty, userId } = useSelector((state) => state.resume);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const resume = useSelector((state) => state.resume);
      const response = await fetch('/api/resume/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resume),
      });

      if (response.ok) {
        dispatch(markSaved());
      }
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-display text-forge-gold">CareerForge Pro</h1>
          <p className="text-gray-400 text-sm">Resume Builder</p>
        </div>
        <div className="flex items-center gap-4">
          {isDirty && <span className="text-yellow-500 text-sm">● Unsaved changes</span>}
          <button
            onClick={handleSave}
            disabled={!isDirty || isSaving}
            className={`btn-primary ${!isDirty || isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSaving ? 'Saving...' : 'Save Resume'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Form Panel - 40% */}
        <div className="w-2/5 overflow-y-auto bg-deep-ink border-r border-gray-800">
          <FormPanel />
        </div>

        {/* Live Preview - 60% */}
        <div className="w-3/5 overflow-y-auto bg-gray-950 p-8">
          <LivePreview />
        </div>
      </div>
    </div>
  );
}
