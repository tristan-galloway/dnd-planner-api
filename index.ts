import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './data/connect';
import routes from './routes';
import dotenv from 'dotenv';

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

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
