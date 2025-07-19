import express from 'express';
const router = express.Router();

import usersRoutes from './users';
import charactersRoutes from './characters';
import swaggerRoutes from './swagger';
import campaignRoutes from './campaigns';
import itemsRoutes from './items';
import authRoutes from './auth';
import accountRoutes from './account';

// Main application routes
router.use('/users', usersRoutes);
router.use('/characters', charactersRoutes);
router.use('/items', itemsRoutes);
router.use('/auth', authRoutes);
router.use('/account', accountRoutes);

// Swagger documentation route
router.use('/api-docs', swaggerRoutes);
router.use('/campaigns', campaignRoutes);

export default router;
