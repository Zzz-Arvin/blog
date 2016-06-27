var Koa = require('koa');
var app = new Koa();

app.use(ctx => {
	ctx.body = 'Welcome To Arvin Blog';
});

app.listen(3000);