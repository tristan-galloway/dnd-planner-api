import express from 'express';
const router = express.Router();

import usersRoutes from './users';
import charactersRoutes from './characters';
import swaggerRoutes from './swagger';
import campaignRoutes from './campaigns';
import itemsRoutes from './items';

// Main application routes
router.use('/users', usersRoutes);
router.use('/characters', charactersRoutes);
router.use('/items', itemsRoutes);
router.use('/campaigns', campaignRoutes);

// Swagger documentation route
router.use(
    '/api-docs',
    // #swagger.ignore = true
    swaggerRoutes);

export default router;