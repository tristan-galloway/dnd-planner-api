import express, { Router } from 'express';
import usersRoutes from './users';
import charactersRoutes from './characters';
import swaggerRoutes from './swagger';

const router: Router = express.Router();

router.use('/users', usersRoutes);
router.use('/characters', charactersRoutes);
router.use('/api-docs', swaggerRoutes);

export default router;