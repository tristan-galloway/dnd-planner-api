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
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (req, res) => {
    // Successful authentication, redirect to account page
    res.redirect('/account');
  }
);

// Logout route
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }

    req.session.destroy(function(err) {
      if (err) return next(err);

      res.clearCookie('connect.sid'); // removes the cookie from browser
      res.redirect('/'); 
    });
  });
});

export default router;
