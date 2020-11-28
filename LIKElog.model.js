const LIKElog= new Schema({

    Id: {type: String, required: true },
    userId: { type: String, required: true },
    entity_Id: { type: String, required: true },
    entity_type: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const LIKElog1= mongoose.model('LIKElog', LIKElog);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewLIKElog = new LIKElog1({Id,
    userId,
    entity_Id,
    entity_type,
    isDeleted})
NewLIKElog.save()