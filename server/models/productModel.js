const {Schema, model} = require('../connection');

const myschema = new Schema({
   title : String,
   description : String,
   price : Number,
   category : String,
   image : String,
});

module.exports = model("product", myschema);