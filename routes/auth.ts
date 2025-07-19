import express from 'express';
import passport from '../auth/oauthStrategy';

const router = express.Router();

// Route to render login page at /login
router.get('/login', (req, res) => {
  res.render('login');
});

// Route to initiate Google OAuth login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// OAuth callback route
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home or dashboard
    res.redirect('/');
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

export default router;
