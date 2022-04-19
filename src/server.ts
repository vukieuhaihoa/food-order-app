import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morganMiddleware from './middlewares/Morgan.middleware';
import settingRoutes from './routes';
import { HandleError } from './controllers/Error.controller';

const PORT = process.env.PORT || 8080;

export function start() {
  const app: Express = express();

  // add morgan middleware
  app.use(morganMiddleware);

  // support parsing application/json type post data
  app.use(bodyParser.json());
  // support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));

  // add cors
  app.use(cors());

  settingRoutes(app);

  // Error handle middleware
  app.use(HandleError);

  app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
  });
}
