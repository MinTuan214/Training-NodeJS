const newsRoute = require('./news');
const coursesRoute = require('./courses');
const categoryRoute = require('./categories');
const siteRoute = require('./site');

function route(app) {
  app.use('/news', newsRoute);

  app.use('/courses', coursesRoute);

  app.use('/cate', categoryRoute);

  app.use('/', siteRoute);
}

module.exports = route;
