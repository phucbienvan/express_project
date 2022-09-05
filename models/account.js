const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AccountSchema = new Schema({
    username : String,
    password : String
}, {
    collection : 'accounts'
});
const AccountModel = mongoose.model('accounts', AccountSchema)
module.exports = AccountModel
var newServicer