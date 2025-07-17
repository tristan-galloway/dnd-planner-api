import { body, param, query } from 'express-validator';

// GET /characters?limit=10&page=2
export const validateGetAllCharacters = [
  query('limit')
    .optional()
    .isInt({ min: 1 }).withMessage('Limit must be a positive integer.')
    .toInt(),
  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('Page must be a positive integer.')
    .toInt()
];

// GET /characters/:id
export const validateGetCharacter = [
  param('id')
    .isMongoId().withMessage('Invalid character ID format.')
];

// POST /characters
export const validateCreateCharacter = [
  body('name')
    .notEmpty().withMessage('Name is required.'),
  body('race')
    .notEmpty().withMessage('Race is required.'),
  body('subrace')
    .notEmpty().withMessage('Subrace is required.'),
  body('class')
    .notEmpty().withMessage('Class is required.'),
  body('level')
    .isInt({ min: 1 }).withMessage('Level must be a positive integer.'),
  body('background')
    .notEmpty().withMessage('Background is required.'),
  body('alignment')
    .notEmpty().withMessage('Alignment is required.'),
  body('experiencePoints')
    .isInt({ min: 0 }).withMessage('Experience points must be a non-negative integer.'),
  body('playerName')
    .notEmpty().withMessage('Player name is required.'),
  body('abilities').isObject().withMessage('Abilities must be an object.'),
  body('abilities.strength')
    .isInt({ min: 1 }).withMessage('Strength must be a positive integer.'),
  body('abilities.dexterity')
    .isInt({ min: 1 }).withMessage('Dexterity must be a positive integer.'),
  body('abilities.constitution')
    .isInt({ min: 1 }).withMessage('Constitution must be a positive integer.'),
  body('abilities.intelligence')
    .isInt({ min: 1 }).withMessage('Intelligence must be a positive integer.'),
  body('abilities.wisdom')
    .isInt({ min: 1 }).withMessage('Wisdom must be a positive integer.'),
  body('abilities.charisma')
    .isInt({ min: 1 }).withMessage('Charisma must be a positive integer.')
];

// PUT /characters/:id
export const validateUpdateCharacter = [
  param('id')
    .isMongoId().withMessage('Invalid character ID format.'),
  body('name').optional().isString().withMessage('Name must be a string.'),
  body('race').optional().isString().withMessage('Race must be a string.'),
  body('subrace').optional().isString().withMessage('Subrace must be a string.'),
  body('class').optional().isString().withMessage('Class must be a string.'),
  body('level').optional().isInt({ min: 1 }).withMessage('Level must be a positive integer.'),
  body('background').optional().isString().withMessage('Background must be a string.'),
  body('alignment').optional().isString().withMessage('Alignment must be a string.'),
  body('experiencePoints').optional().isInt({ min: 0 }).withMessage('Experience points must be a non-negative integer.'),
  body('playerName').optional().isString().withMessage('Player name must be a string.'),
  body('abilities').optional().isObject().withMessage('Abilities must be an object.'),
  body('abilities.strength').optional().isInt({ min: 1 }).withMessage('Strength must be a positive integer.'),
  body('abilities.dexterity').optional().isInt({ min: 1 }).withMessage('Dexterity must be a positive integer.'),
  body('abilities.constitution').optional().isInt({ min: 1 }).withMessage('Constitution must be a positive integer.'),
  body('abilities.intelligence').optional().isInt({ min: 1 }).withMessage('Intelligence must be a positive integer.'),
  body('abilities.wisdom').optional().isInt({ min: 1 }).withMessage('Wisdom must be a positive integer.'),
  body('abilities.charisma').optional().isInt({ min: 1 }).withMessage('Charisma must be a positive integer.')
];

// DELETE /characters/:id
export const validateDeleteCharacter = [
  param('id')
    .isMongoId().withMessage('Invalid character ID format.')
];
