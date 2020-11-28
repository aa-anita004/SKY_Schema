
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Feed= new Schema({

    get_Feed: {type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Feed1= mongoose.model('Feed', Feed);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewFeed = new Feed1({get_Feed: 'Awsome',
                           isDeleted: false})
NewFeed.save()