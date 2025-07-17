import { body, param, query } from 'express-validator';

// GET /users?limit=10&page=1
export const validateGetAllUsers = [
  query('limit')
    .optional()
    .isInt({ min: 1 }).withMessage('Limit must be a positive integer.')
    .toInt(),
  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('Page must be a positive integer.')
    .toInt()
];

// GET /users/:id
export const validateGetUser = [
  param('id')
    .isMongoId().withMessage('Invalid user ID format.')
];

// POST /users
export const validateCreateUser = [
  body('username')
    .notEmpty().withMessage('Username is required.')
    .isString().withMessage('Username must be a string.'),
  body('email')
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Email must be a valid email address.'),
  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  body('avatarUrl')
    .optional()
    .isURL().withMessage('Avatar URL must be a valid URL.'),
  body('fitnessGoals')
    .optional()
    .isString().withMessage('Fitness goals must be a string.'),
  body('bio')
    .optional()
    .isString().withMessage('Bio must be a string.')
];

// PUT /users/:id
export const validateUpdateUser = [
  param('id')
    .isMongoId().withMessage('Invalid user ID format.'),
  body('username')
    .optional()
    .isString().withMessage('Username must be a string.'),
  body('email')
    .optional()
    .isEmail().withMessage('Email must be valid.'),
  body('avatarUrl')
    .optional()
    .isURL().withMessage('Avatar URL must be a valid URL.'),
  body('fitnessGoals')
    .optional()
    .isString().withMessage('Fitness goals must be a string.'),
  body('bio')
    .optional()
    .isString().withMessage('Bio must be a string.')
];

// DELETE /users/:id
export const validateDeleteUser = [
  param('id')
    .isMongoId().withMessage('Invalid user ID format.')
];
