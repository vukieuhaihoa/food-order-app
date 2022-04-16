import express from 'express';
import dotenv from 'dotenv-safe';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morganMiddleware from './middlewares/MorganMiddleware';
import settingRoutes from './routes';

// Loading config environment for app
dotenv.config();

const app = express();

// add morgan middleware
app.use(morganMiddleware);

// support parsing application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || '';
mongoose.connect(
  MONGO_URI,
  {
    maxPoolSize: 10,
  },
  err => {
    if (!err) {
      console.log('Connect DB success');
    } else {
      console.log(err);
      console.log('Connect DB fail');
    }
  }
);

settingRoutes(app);

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});
