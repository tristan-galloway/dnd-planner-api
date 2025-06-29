import express from 'express';
const router = express.Router();
import usersRoutes from './users';
import swaggerRoutes from './swagger';

router.use('/users', usersRoutes);
router.use('/api-docs', swaggerRoutes);

export default router;