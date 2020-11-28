const Report= new Schema({

    Id: {type: String, required: true },
    reported_by: { type: String, required: true },
    description: { type: String, required: true },
    entity_Id: { type: String, required: true },
    entity_type: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Report1= mongoose.model('Report', Report);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewReport = new Report1({Id,
    reported_by,
    description,
    entity_Id,
    entity_type,
    isDeleted})
NewReport.save()