const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment= new Schema({

    id: {type: String, required: true },
    userId: { type: String, required: true },
    description: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const comment1= mongoose.model('Comment', Comment);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewComment = new comment1({Id: '123',
    userId: '243667',
     description: 'comment model',
    isDeleted: false})
NewComment.save()