import express from 'express';
const router = express.Router();
import * as usersController from '../controllers/users';

router.get(
    '/',
    /* #swagger.description = 'Get all users'
     #swagger.responses[200] = {
       description: 'List of users',
       schema: [
            {
                "_id": "6657e82ded56c2256c29b108",
                "username": "fit_jane",
                "email": "jane@example.com",
                "avatarUrl": "https://example.com/avatar/jane.jpg",
                "fitnessGoals": "Build strength and endurance",
                "friends": [],
                "routines": [],
                "joinedAt": "2024-10-01T10:00:00Z",
                "bio": "Life                    long runner and HIIT fan"
            }
       ]
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
    */
    usersController.getAll
);

router.get(
    '/:id',
    usersController.getSingle
);

router.post(
    '/',
    usersController.createUser
);

router.put(
    '/:id',
    usersController.updateUser
);

router.delete(
    '/:id',
    usersController.deleteUser
);

export default router;