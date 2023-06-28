const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'https://locker-backend.onrender.com',
      changeOrigin: true,
    })
  );
};
