const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://eos0wso8o840ccggw8cocoww.centobookkeeping.online',
      changeOrigin: true,
    })
  );
};
