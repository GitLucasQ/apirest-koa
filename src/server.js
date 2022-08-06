import './db';
import routes from './routes/index';
const koa = require('koa');
const koaBody = require('koa-body')


// APP
const app = new koa();

// USES
app.use(koaBody());

// ROUTES
app.use(routes.routes());


app.listen(4000, () => console.log('Server online on: http://localhost:4000'));