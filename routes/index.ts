import express from 'express';
const router = express.Router();

import usersRoutes from './users';
import charactersRoutes from './characters';
import swaggerRoutes from './swagger';

router.use('/users', usersRoutes);
router.use('/characters', charactersRoutes);
router.use('/api-docs', swaggerRoutes);

export default router;