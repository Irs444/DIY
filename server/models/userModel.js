

const {Schema, model} = require("../connection")

const myschema = new Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
    location: {type : String, default : 'Not Specified'},
    createdAt: {
        type : Date,
        default: Date.now()
    },
});

module.exports = model("user", myschema);