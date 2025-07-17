import express from 'express';
import * as usersController from '../controllers/users';
import { validationResult } from 'express-validator';
import {
  validateGetAllUsers,
  validateGetUser,
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser
} from '../middleware/uservalidation';

const router = express.Router();

const handleValidation: express.RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;  // just return void here, not return the response object
  }
  next();
};

router.get(
    '/',
    /* #swagger.tags = ['Users']
       #swagger.description = 'Get all users'
       #swagger.responses[200] = {
         description: 'List of users',
         content: {
           "application/json": {
             schema: {
               type: "array",
               items: {
                 type: "object",
                 properties: {
                   name: { type: "string", example: "Jane Doe" },
                   email: { type: "string", example: "jane@example.com" },
                   password: { type: "string", example: "$2b$10$abcdef..." },
                   profile_img: { type: "string", example: "https://example.com/avatar/jane.jpg" },
                   character: { type: "array", items: { type: "string" }, example: ["Arannis", "Thorin"] }
                 }
               }
             }
           }
         }
       }
       #swagger.responses[400] = { description: 'Invalid query parameters' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    validateGetAllUsers,
    handleValidation,
    usersController.getAll
);

router.get(
    '/:id',
    /* #swagger.tags = ['Users']
       #swagger.description = 'Get a user by ID'
       #swagger.parameters['id'] = { description: 'User ID', type: 'string' }
       #swagger.responses[200] = { description: 'User found' }
       #swagger.responses[400] = { description: 'Invalid user ID format' }
       #swagger.responses[404] = { description: 'User not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    validateGetUser,
    handleValidation,
    usersController.getSingle
);

router.post(
    '/',
    /* #swagger.tags = ['Users']
       #swagger.description = 'Create a new user'
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               "username": "string",
               "email": "string",
               "password": "string",
               "avatarUrl": "string",
               "fitnessGoals": "string",
               "bio": "string"
             }
           }
         }
       }
       #swagger.responses[201] = { description: 'User created' }
       #swagger.responses[400] = { description: 'Missing or invalid user data' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    validateCreateUser,
    handleValidation, 
    usersController.createUser
);

router.put(
    '/:id',
    /* #swagger.tags = ['Users']
       #swagger.description = 'Update a user by ID'
       #swagger.parameters['id'] = { description: 'User ID', type: 'string' }
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               "username": "string",
               "email": "string",
               "avatarUrl": "string",
               "fitnessGoals": "string",
               "bio": "string"
             }
           }
         }
       }
       #swagger.responses[204] = { description: 'User updated' }
       #swagger.responses[400] = { description: 'Invalid user ID or update data' }
       #swagger.responses[404] = { description: 'User not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    validateUpdateUser,
    handleValidation,
    usersController.updateUser
);

router.delete(
    '/:id',
    /* #swagger.tags = ['Users']
       #swagger.description = 'Delete a user by ID'
       #swagger.parameters['id'] = { description: 'User ID', type: 'string' }
       #swagger.responses[200] = { description: 'User deleted' }
       #swagger.responses[400] = { description: 'Invalid user ID format' }
       #swagger.responses[404] = { description: 'User not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    validateDeleteUser,
    handleValidation,
    usersController.deleteUser
);

export default router;