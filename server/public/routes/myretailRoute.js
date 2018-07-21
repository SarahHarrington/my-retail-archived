module.exports = function(app) {
  const myRetail = require('../controllers/myretailController.js');

  app.route('/item')
    .get(myRetail.getItem)
    .put(myRetail.updatePrice);
}