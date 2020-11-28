const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const POST= new Schema({

    challenge: {type: String, required: true },
    media: { type: String, required: true },
    status_Update: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const POST1= mongoose.model('POST', POST);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewPOST = new POST1({challenge: 'Accepted',
    media: 'yes',
    status_Update: 'up',
    isDeleted: false})
NewPOST.save()