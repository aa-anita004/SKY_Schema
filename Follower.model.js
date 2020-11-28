const Follower= new Schema({

    Id: {type: String, required: true },
    userId: { type: String, required: true },
    followerId: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Follower1= mongoose.model('Follower', Follower);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewFollower = new Follower1({Id,
    userId,
    followerId,
    isDeleted})
NewFollower.save()