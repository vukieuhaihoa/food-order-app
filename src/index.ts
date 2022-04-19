import dotenv from 'dotenv-safe';
import mongoose from 'mongoose';
import { start } from './server';

// Loading config environment for app
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';
const MONGO_CONFIG = {
  maxPoolSize: 10,
};
mongoose
  .connect(MONGO_URI, MONGO_CONFIG)
  .then(_result => {
    // console.log(result);
    console.log('Connect DB success');
    start();
  })
  .catch(_err => {
    // console.log(err);
    console.log('Connect DB fail');
  });
