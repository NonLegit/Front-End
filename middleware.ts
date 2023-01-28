// middleware.ts
module.exports = (req, res, next) => {
    if (req.method !== 'GET') {
      req.method = 'GET';
    }
    next();
}