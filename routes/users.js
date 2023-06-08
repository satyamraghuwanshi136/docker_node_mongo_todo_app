const mongoose = require('mongoose');

mongoose.connect('mongodb://todomongo/todotest',{ useNewUrlParser: true },()=>{
  console.log('connected to mongodb');
})

const listModel = mongoose.Schema({
  message: String
});


module.exports = mongoose.model('list', listModel);