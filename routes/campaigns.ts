import express from 'express';
const router = express.Router();
import * as campaignController from '../controllers/campaigns';

router.get(
    '/',
    /* #swagger.tags = ['Campaigns']
       #swagger.description = 'Get all campaigns'
       #swagger.responses[200] = {
         description: 'List of campaigns',
         content: {
           "application/json": {
             schema: {
               type: "array",
               items: {
                 type: "object",
                 properties: {
                   title: { type: "string", example: "The Shadow of Greymoor" },
                   setting: { type: "string", example: "Forgotten Realms" },
                   description: { type: "string", example: "An epic quest across the Sword Coast" },
                   session_notes: { 
                     type: "array", 
                     items: { type: "string" },
                     example: ["Session 1: The party met in Waterdeep", "Session 2: Ambushed on the road to Daggerford"]
                   }
                 }
               }
             }
           }
         }
       }
       #swagger.responses[400] = { description: 'Invalid query parameters' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    campaignController.getAll
);

router.get(
    '/:id',
    /* #swagger.tags = ['Campaigns']
       #swagger.description = 'Get a campaign by ID'
       #swagger.parameters['id'] = { description: 'Campaign ID', type: 'string' }
       #swagger.responses[200] = { description: 'Campaign found' }
       #swagger.responses[400] = { description: 'Invalid campaign ID format' }
       #swagger.responses[404] = { description: 'Campaign not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    campaignController.getSingle
);

router.post(
    '/',
    /* #swagger.tags = ['Campaigns']
       #swagger.description = 'Create a new campaign'
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               title: "string",
               setting: "string",
               description: "string",
               session_notes: ["string"]
             }
           }
         }
       }
       #swagger.responses[201] = { description: 'Campaign created' }
       #swagger.responses[400] = { description: 'Missing or invalid campaign data' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    campaignController.createCampaign
);

router.put(
    '/:id',
    /* #swagger.tags = ['Campaigns']
       #swagger.description = 'Update a campaign by ID'
       #swagger.parameters['id'] = { description: 'Campaign ID', type: 'string' }
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               title: "string",
               setting: "string",
               description: "string",
               session_notes: ["string"]
             }
           }
         }
       }
       #swagger.responses[204] = { description: 'Campaign updated' }
       #swagger.responses[400] = { description: 'Invalid campaign ID or update data' }
       #swagger.responses[404] = { description: 'Campaign not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    campaignController.updateCampaign
);

router.delete(
    '/:id',
    /* #swagger.tags = ['Campaigns']
       #swagger.description = 'Delete a campaign by ID'
       #swagger.parameters['id'] = { description: 'Campaign ID', type: 'string' }
       #swagger.responses[200] = { description: 'Campaign deleted' }
       #swagger.responses[400] = { description: 'Invalid campaign ID format' }
       #swagger.responses[404] = { description: 'Campaign not found' }
       #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    campaignController.deleteCampaign
);

export default router;
