import { Router } from 'express';
import { LayoutController } from './layout.controller.js';
import auth from '../../middleware/auth.js';

const router = Router();

router.post('/', auth, LayoutController.saveLayout);
router.get('/', auth, LayoutController.getLayouts);

export const LayoutRoutes = router;
