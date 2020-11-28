const POST= new Schema({

    Challenge: {type: String, required: true },
    Media: { type: String, required: true },
    Status_Update: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const POST1= mongoose.model('POST', POST);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewPOST = new POST1({Challenge,
    Media,
    Status_Update,
    isDeleted})
NewPOST.save()