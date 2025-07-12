import express from 'express';
const router = express.Router();
import usersRoutes from './users';
import swaggerRoutes from './swagger';
import campaignRoutes from './campaigns';

router.use('/users', usersRoutes);
router.use('/api-docs', swaggerRoutes);
router.use('/campaigns', campaignRoutes);

export default router;