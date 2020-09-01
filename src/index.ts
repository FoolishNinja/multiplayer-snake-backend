import { resolve } from 'path';
import { config } from 'dotenv';
import App from './models/App';

config({ path: resolve(__dirname, `../src/.env.${process.env.NODE_ENV}`) });
const app = new App();