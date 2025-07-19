import express from 'express';
import { renderAccount } from '../controllers/accountController';

const router = express.Router();

// Middleware to check if user is signed in
function ensureAuthenticated(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
}

router.get('/', ensureAuthenticated, (req, res) => {
  res.render('account');
});

export default router;
