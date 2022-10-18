const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const path = require('path');

const home = serve(path.join(__dirname, '/public3/'));
app.use(home);
app.listen(3001);