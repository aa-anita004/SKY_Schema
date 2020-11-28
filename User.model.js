
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({

    firstName: {type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String },
    password: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

//module.exports = mongoose.model('User', User);
const User1 = mongoose.model('User', User);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewUser = new User1({firstName:"XYZ",
    lastName:"xxz",
    email:"abc",
    phone_number:"123456789",
    password:"qwertyy",
    isDeleted:false})
NewUser.save()


