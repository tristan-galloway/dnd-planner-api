import express from 'express';
const router = express.Router();
import * as characterController from '../controllers/characters';

router.get(
  '/',
  /* #swagger.tags = ['Characters']
     #swagger.description = 'Get all characters'
     #swagger.responses[200] = {
       description: 'List of characters',
       content: {
         "application/json": {
           schema: {
             type: "array",
             items: {
               type: "object",
               properties: {
                 name: { type: "string", example: "Arannis" },
                 race: { type: "string", example: "Elf" },
                 subrace: { type: "string", example: "High Elf" },
                 class: { type: "string", example: "Wizard" },
                 level: { type: "integer", example: 5 },
                 background: { type: "string", example: "Sage" },
                 alignment: { type: "string", example: "Neutral Good" },
                 experiencePoints: { type: "integer", example: 6500 },
                 playerName: { type: "string", example: "Jane Doe" },
                 abilities: {
                   type: "object",
                   properties: {
                     strength: { type: "integer", example: 8 },
                     dexterity: { type: "integer", example: 14 },
                     constitution: { type: "integer", example: 12 },
                     intelligence: { type: "integer", example: 18 },
                     wisdom: { type: "integer", example: 10 },
                     charisma: { type: "integer", example: 11 }
                   }
                 }
               }
             }
           }
         }
       }
     }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  characterController.getAllCharacters
);

router.get(
  '/:id',
  /* #swagger.tags = ['Characters']
     #swagger.description = 'Get a character by ID'
     #swagger.parameters['id'] = { description: 'Character ID', type: 'string' }
     #swagger.responses[200] = { description: 'Character found' }
     #swagger.responses[400] = { description: 'Invalid character ID format' }
     #swagger.responses[404] = { description: 'Character not found' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  characterController.getCharacter
);

router.post(
  '/',
  /* #swagger.tags = ['Characters']
     #swagger.description = 'Create a new character'
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             required: ["name", "race", "subrace", "class", "level", "background", "alignment", "experiencePoints", "playerName", "abilities"],
             properties: {
               name: { type: "string", example: "Thorin" },
               race: { type: "string", example: "Dwarf" },
               subrace: { type: "string", example: "Mountain Dwarf" },
               class: { type: "string", example: "Fighter" },
               level: { type: "integer", example: 3 },
               background: { type: "string", example: "Soldier" },
               alignment: { type: "string", example: "Lawful Good" },
               experiencePoints: { type: "integer", example: 900 },
               playerName: { type: "string", example: "John Smith" },
               abilities: {
                 type: "object",
                 properties: {
                   strength: { type: "integer", example: 16 },
                   dexterity: { type: "integer", example: 12 },
                   constitution: { type: "integer", example: 14 },
                   intelligence: { type: "integer", example: 10 },
                   wisdom: { type: "integer", example: 11 },
                   charisma: { type: "integer", example: 8 }
                 }
               }
             }
           }
         }
       }
     }
     #swagger.responses[201] = { description: 'Character created' }
     #swagger.responses[400] = { description: 'Missing or invalid character data' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  characterController.createCharacter
);

router.put(
  '/:id',
  /* #swagger.tags = ['Characters']
     #swagger.description = 'Update a character by ID'
     #swagger.parameters['id'] = { description: 'Character ID', type: 'string' }
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               name: { type: "string" },
               level: { type: "integer" },
               alignment: { type: "string" },
               experiencePoints: { type: "integer" },
               abilities: {
                 type: "object",
                 properties: {
                   strength: { type: "integer" },
                   dexterity: { type: "integer" },
                   // and so on...
                 }
               }
             }
           }
         }
       }
     }
     #swagger.responses[204] = { description: 'Character updated' }
     #swagger.responses[400] = { description: 'Invalid character ID or update data' }
     #swagger.responses[404] = { description: 'Character not found' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  characterController.updateCharacter
);

router.delete(
  '/:id',
  /* #swagger.tags = ['Characters']
     #swagger.description = 'Delete a character by ID'
     #swagger.parameters['id'] = { description: 'Character ID', type: 'string' }
     #swagger.responses[200] = { description: 'Character deleted' }
     #swagger.responses[400] = { description: 'Invalid character ID format' }
     #swagger.responses[404] = { description: 'Character not found' }
     #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  characterController.deleteCharacter
);

export default router;