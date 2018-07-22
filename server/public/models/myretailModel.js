var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({ 
  itemNumber: {type: Number},
  itemPrice: {type: Number}
})

module.exports = mongoose.model('Items', ItemSchema);