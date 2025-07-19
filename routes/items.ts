import express from 'express';
const router = express.Router();
import * as itemsController from '../controllers/items';

router.get(
  '/',
  /* #swagger.tags = ['Items']
     #swagger.description = 'Get all items'
     #swagger.responses[200] = {
       description: 'List of items',
       content: {
         "application/json": {
           schema: {
             type: "array",
             items: {
               type: "object",
               properties: {
                 name: { type: "string", example: "Sword of Truth" },
                 value: { type: "integer", example: 1000 },
                 campain_discovered: { type: "string", example: "6657e82ded56c2256c29b108" },
                 description: { type: "string", example: "A legendary sword." }
               }
             }
           }
         }
       }
     }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  itemsController.getAll
);

router.get(
  '/:id',
  /* #swagger.tags = ['Items']
     #swagger.description = 'Get an item by ID'
     #swagger.parameters['id'] = { description: 'Item ID', type: 'string' }
     #swagger.responses[200] = {
       description: 'Item found',
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               _id: { type: "string", example: "6657e82ded56c2256c29b109" },
               name: { type: "string", example: "Sword of Truth" },
               value: { type: "integer", example: 1000 },
               campain_discovered: { type: "string", example: "6657e82ded56c2256c29b108" },
               description: { type: "string", example: "A legendary sword." }
             }
           },
           example: {
             _id: "6657e82ded56c2256c29b109",
             name: "Sword of Truth",
             value: 1000,
             campain_discovered: "6657e82ded56c2256c29b108",
             description: "A legendary sword."
           }
         }
       }
     }
     #swagger.responses[400] = { description: 'Invalid item ID format' }
     #swagger.responses[404] = { description: 'Item not found' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  itemsController.getSingle
);

router.post(
  '/',
  /* #swagger.tags = ['Items']
     #swagger.description = 'Create a new item'
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               name: { type: "string", example: "Sword of Truth" },
               value: { type: "integer", example: 1000 },
               campain_discovered: { type: "string", example: "6657e82ded56c2256c29b108" },
               description: { type: "string", example: "A legendary sword." }
             },
             example: {
               name: "Sword of Truth",
               value: 1000,
               campain_discovered: "6657e82ded56c2256c29b108",
               description: "A legendary sword."
             }
           }
         }
       }
     }
     #swagger.responses[201] = {
       description: 'Item created',
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               _id: { type: "string", example: "6657e82ded56c2256c29b109" },
               name: { type: "string", example: "Sword of Truth" },
               value: { type: "integer", example: 1000 },
               campain_discovered: { type: "string", example: "6657e82ded56c2256c29b108" },
               description: { type: "string", example: "A legendary sword." }
             }
           },
           example: {
             _id: "6657e82ded56c2256c29b109",
             name: "Sword of Truth",
             value: 1000,
             campain_discovered: "6657e82ded56c2256c29b108",
             description: "A legendary sword."
           }
         }
       }
     }
     #swagger.responses[400] = { description: 'Missing or invalid item data' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  itemsController.createItem
);

router.put(
  '/:id',
  /* #swagger.tags = ['Items']
     #swagger.description = 'Update an item by ID'
     #swagger.parameters['id'] = { description: 'Item ID', type: 'string' }
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               name: { type: "string", example: "Sword of Destiny" },
               value: { type: "integer", example: 1500 },
               campain_discovered: { type: "string", example: "6657e82ded56c2256c29b108" },
               description: { type: "string", example: "An even more legendary sword." }
             },
             example: {
               name: "Sword of Destiny",
               value: 1500,
               campain_discovered: "6657e82ded56c2256c29b108",
               description: "An even more legendary sword."
             }
           }
         }
       }
     }
     #swagger.responses[204] = { description: 'Item updated (no content)' }
     #swagger.responses[400] = { description: 'Invalid item ID or update data' }
     #swagger.responses[404] = { description: 'Item not found' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  itemsController.updateItem
);

router.delete(
  '/:id',
  /* #swagger.tags = ['Items']
     #swagger.description = 'Delete an item by ID'
     #swagger.parameters['id'] = { description: 'Item ID', type: 'string' }
     #swagger.responses[200] = { description: 'Item deleted' }
     #swagger.responses[400] = { description: 'Invalid item ID format' }
     #swagger.responses[404] = { description: 'Item not found' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  itemsController.deleteItem
);

export default router;