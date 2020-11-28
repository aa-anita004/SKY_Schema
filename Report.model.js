const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Report= new Schema({

    id: {type: String, required: true },
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
const NewReport = new Report1({id: 'qwe123',
    reported_by: 'asvds',
    description: 'this is regarding repotredby',
    entity_Id: 'admsnr124',
    entity_type: 'qweyexsz',
    isDeleted: false})
NewReport.save()