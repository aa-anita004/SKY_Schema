

const Feed= new Schema({

    Get_Feed: {type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Feed1= mongoose.model('Feed', Feed);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewFeed = new Feed1({Get_Feed,
                                 isDeleted})
NewFeed.save()