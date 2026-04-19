import { Router } from 'express';
import { UserModule } from '../modules/user/user.module.js';
import { LayoutModule } from '../modules/layout/layout.module.js';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserModule.route,
  },
  {
    path: '/layouts',
    route: LayoutModule.route,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
