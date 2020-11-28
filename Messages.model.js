const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Messages= new Schema({

    senderId: {type: String, required: true },
    receiverId: { type: String, required: true },
    message: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Messages1= mongoose.model('Messages', Messages);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewMessages = new Messages1({senderId: '9084576346',
    receiverId: 'ggu8990680',
    message: 'msg rcvd',
    isDeleted: false})
NewMessages.save()