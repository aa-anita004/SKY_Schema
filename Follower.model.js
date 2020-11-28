
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Follower= new Schema({

    id: {type: String, required: true },
    userId: { type: String, required: true },
    followerId: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Follower1= mongoose.model('Follower', Follower);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewFollower = new Follower1({id: '1234',
    userId: 'abc12',
    followerId: 'aa.aa12345',
    isDeleted: false})
NewFollower.save()