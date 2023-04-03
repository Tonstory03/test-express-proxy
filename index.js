const proxy = require('express-http-proxy');
const app = require('express')();
const port = process.env.ENV_PORT || 8080;
const FORWARD_URL = ""; // fill forward url

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(proxy(FORWARD_URL));

app.listen(port, console.info(`Create server port: {${port}}`))