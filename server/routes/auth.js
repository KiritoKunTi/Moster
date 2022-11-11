import { Router } from 'express';
import { register, login, getMe } from '../controllers/auth.js';

const router = new Router();

// Register
router.post('/register', register);

// Log in 
router.post('/login', login);

// Get me
router.get('/me', getMe)

export default router;