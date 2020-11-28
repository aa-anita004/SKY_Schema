const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userinfo= new Schema({

    get_Profile: {type: String, required: true },
    get_User: { type: String, required: true },
    edit: { type: String, required: true },
    update_User: { type: String },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Userinfo1= mongoose.model('Userinfo', Userinfo);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewUserinfo = new Userinfo1({get_Profile: 'aa.abdid004',
    get_User: 'qjfome1123',
    edit: 'djmsjf_adad',
    update_User: 'djsjjs_ufdj', 
    isDeleted: 'false'})
NewUserinfo.save()