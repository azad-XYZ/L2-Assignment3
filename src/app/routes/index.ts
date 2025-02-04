
import UserRoutes from '../modules/user/user.route';
import express from 'express'

const router = express.Router();

const moduleRoutes = [
  //change the path and routes
  {
    path: '/auth',
    route: UserRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
