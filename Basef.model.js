const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaseFlow= new Schema({
    signup: {type: String, required: true },
    verify_email: { type: String, required: true },
    login: { type: String, required: true, unique: true },
    forgot_password: { type: String },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const BaseFlow1= mongoose.model('BaseFlow', BaseFlow);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewBaseFlow = new BaseFlow1({signup: 'abc',
    verify_email: 'xyz',
    login: 'abc123',
    forgot_password: 'abbbb233',
    isDeleted: false})
NewBaseFlow.save()