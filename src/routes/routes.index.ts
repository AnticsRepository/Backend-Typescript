import Router from 'express';
import MAIN_ROUTE from './main.route';

const ROUTES = Router();

ROUTES.use('/', [MAIN_ROUTE]);

export default ROUTES;