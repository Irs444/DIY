

const {Schema, model} = require("../connection")

const myschema = new Schema({
    name: String,
    email: String,
    review: String,
    rating:String
});

module.exports = model("feedback", myschema);