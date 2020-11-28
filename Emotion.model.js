const Emotion= new Schema({

    postId: {type: String, required: true },
    EmotionType: { type: String, required: true },
    count: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Emotion1= mongoose.model('Emotion', Emotion);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewEmotion = new Emotion1({postId,
    EmotionType,
    count,
    isDeleted})
NewEmotion.save()