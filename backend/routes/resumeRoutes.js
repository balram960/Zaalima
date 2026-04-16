import express from 'express';
import {
  saveResume,
  getResumeById,
  getResumesByUser,
  deleteResume,
} from '../controllers/resumeController.js';

const router = express.Router();

router.post('/save', saveResume);
router.get('/:id', getResumeById);
router.get('/user/:userId', getResumesByUser);
router.delete('/:id', deleteResume);

export default router;
