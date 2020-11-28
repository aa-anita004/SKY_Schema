
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LIKElog= new Schema({

    id: {type: String, required: true },
    userId: { type: String, required: true },
    entity_Id: { type: String, required: true },
    entity_type: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const LIKElog1= mongoose.model('LIKElog', LIKElog);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewLIKElog = new LIKElog1({id: '1234',
    userId: 'abc123',
    entity_Id: 'xyz_123',
    entity_type: 'likelog',
    isDeleted: false})
NewLIKElog.save()