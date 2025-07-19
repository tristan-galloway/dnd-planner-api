import express from 'express';
const router = express.Router();
import * as usersController from '../controllers/users';

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
                   username: { type: "string", example: "janedoe" },
                   email: { type: "string", example: "janedoe@example.com" },
                   password: { type: "string", example: "$2b$10$abcdef..." },
                   profile_img: { type: "string", example: "https://example.com/avatar/janedoe.jpg" },
                   character: { type: "array", items: { type: "string" }, example: ["Arannis", "Thorin"] }
                 }
               },
               example: [
                 {
                   username: "janedoe",
                   email: "janedoe@example.com",
                   password: "$2b$10$abcdef...",
                   profile_img: "https://example.com/avatar/janedoe.jpg",
                   character: ["Arannis", "Thorin"]
                 },
                 {
                   username: "bobsmith",
                   email: "bobsmith@example.com",
                   password: "$2b$10$ghijkl...",
                   profile_img: "https://example.com/avatar/bobsmith.jpg",
                   character: ["Lia", "Gimli"]
                 }
               ]
             }
           }
         }
       }
       #swagger.responses[400] = { description: 'Invalid query parameters' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    usersController.getAll
);

router.get(
    '/:id',
    /* #swagger.tags = ['Users']
       #swagger.description = 'Get a user by ID'
       #swagger.parameters['id'] = { description: 'User ID', type: 'string' }
       #swagger.responses[200] = {
         description: 'User found',
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 username: { type: "string", example: "janedoe" },
                 email: { type: "string", example: "janedoe@example.com" },
                 password: { type: "string", example: "$2b$10$abcdef..." },
                 profile_img: { type: "string", example: "https://example.com/avatar/janedoe.jpg" },
                 character: { type: "array", items: { type: "string" }, example: ["Arannis", "Thorin"] }
               },
               example: {
                 username: "janedoe",
                 email: "janedoe@example.com",
                 password: "$2b$10$abcdef...",
                 profile_img: "https://example.com/avatar/janedoe.jpg",
                 character: ["Arannis", "Thorin"]
               }
             }
           }
         }
       }
       #swagger.responses[400] = { description: 'Invalid user ID format' }
       #swagger.responses[404] = { description: 'User not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
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
               "profile_img": "string",
               "character": ["string", "string"],
               example: {
                 username: "janedoe",
                 email: "janedoe@example.com",
                 password: "$2b$10$abcdef...",
                 profile_img: "https://example.com/avatar/janedoe.jpg",
                 character: ["Arannis", "Thorin"]
               }
             }
           }
         }
       }
       #swagger.responses[201] = { description: 'User created' }
       #swagger.responses[400] = { description: 'Missing or invalid user data' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
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
               type: "object",
               properties: {
                 username: { type: "string", example: "janedoe" },
                 email: { type: "string", example: "janedoe@example.com" },
                 password: { type: "string", example: "newpassword123" },
                 profile_img: { type: "string", example: "https://example.com/avatar/janedoe.jpg" },
                 character: { type: "array", items: { type: "string" }, example: ["Arannis", "Thorin"] }
               },
               example: {
                 username: "janedoe",
                 email: "janedoe@example.com",
                 password: "newpassword123",
                 profile_img: "https://example.com/avatar/janedoe.jpg",
                 character: ["Arannis", "Thorin"]
               }
             }
           }
         }
       }
       #swagger.responses[400] = { description: 'Invalid user ID or update data' }
       #swagger.responses[404] = { description: 'User not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    usersController.updateUser
);

router.delete(
    '/:id',
    /* #swagger.tags = ['Users']
       #swagger.description = 'Delete a user by ID'
       #swagger.parameters['id'] = { description: 'User ID', type: 'string' }
       #swagger.responses[200] = { description: 'User successfully deleted' }
       #swagger.responses[400] = { description: 'Invalid user ID format' }
       #swagger.responses[404] = { description: 'User not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    usersController.deleteUser
);

export default router;