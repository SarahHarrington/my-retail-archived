module.exports = function(app) {
  const myRetail = require('../controllers/myretailController.js');

  app.route('/products/:id')
    .get(myRetail.getItem)
    .put(myRetail.updatePrice);
}