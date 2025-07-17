import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './data/connect';
import routes from './routes';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Connect to MongoDB
connectDB();

// Routes
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', routes);

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
