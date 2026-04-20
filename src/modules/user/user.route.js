import { Router } from 'express';
import { UserController } from './user.controller.js';

const router = Router();

// User authentication and management routes

router.get('/', UserController.getAllUsers);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

export const UserRoutes = router;
