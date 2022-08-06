const Router = require('koa-router');
import productRoutes from './Product.routes';

const routes = new Router({
    prefix: '/api',
});

routes.use(productRoutes.routes());

export default routes;