import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';
import { limitLogin } from '../middlewares/timeout.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', limitLogin, signin);
router.post('/google', google)

export default router;