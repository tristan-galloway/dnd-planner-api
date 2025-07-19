import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './data/connect';
import routes from './routes';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from './auth/oauthStrategy';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Connect to MongoDB
connectDB();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'default_session_secret',
  resave: false,
  saveUninitialized: false,
}));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', routes);

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
