const mongoose = require('mongoose');
const https = require('https');

// let Item = mongoose.model('Items');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({ 
  itemNumber: Number,
  itemPrice: Number
})
const Item = mongoose.model('Item', ItemSchema, 'Items');

exports.getItem = function(req, res) {

  //stuff goes here
    let productId = req.params.id;
    console.log('im getting data!', productId);
  
    https.get('https://redsky.target.com/v2/pdp/tcin/' + productId + '?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics', (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
    
      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        console.log(res.headers);
        res.resume();
        return;
      }
    
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
          getProductPrice(productId);
          return parsedData;
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  }




function getProductPrice(req, res) {
  console.log(req);
  let productId = req;
  Item.findOne({'itemNumber': productId}, (err, data) => {
    if (err) {
      res.send('DB error', err);
    }
    console.log('item from DB', data);
  })
}


exports.updatePrice = function (req, res) {

}