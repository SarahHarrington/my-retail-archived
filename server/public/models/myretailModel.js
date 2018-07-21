const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({ 
  itemNumber: Number,
  itemPrice: Number
})

module.exports = mongoose.model('Items', ItemSchema);