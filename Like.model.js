
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Like= new Schema({

    id: {type: String, required: true },
    count: { type: String, required: true },
    entity_Id: { type: String, required: true },
    entity_type: { type: String, required: true },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Like1= mongoose.model('Like', Like);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewLike = new Like1({id: '78945',
    count: '2',
    entity_Id: 'tio123',
    entity_type: 'xyz',
    isDeleted: false})
NewLike.save()