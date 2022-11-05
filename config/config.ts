import { routes } from './routes';
import { resolve } from 'path';

export default {
  npmClient: "pnpm",
  routes,
  alias: {
    config : resolve( __dirname, './'),
    assets: resolve( __dirname, '../src/assets'),
  }
};
