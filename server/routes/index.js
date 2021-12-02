const questionRouter = require('./questions');

module.exports = (app) => {
  app.use('/api/questions', questionRouter);
}
