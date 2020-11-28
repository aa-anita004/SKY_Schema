const Userinfo= new Schema({

    Get_Profile: {type: String, required: true },
    Get_User: { type: String, required: true },
    Edit: { type: String, required: true },
    Update_User: { type: String },
    isDeleted: {type: Boolean}

}, {
  timestamps: true,
});

const Userinfo1= mongoose.model('Userinfo', Userinfo);

mongoose.connect("mongodb://127.0.0.1:27017/MyCalender", {useNewUrlParser: true});
const NewUserinfo = new Userinfo1({Get_Profile,
    Get_User,
    Edit,
    Update_User, 
    isDeleted})
NewUserinfo.save()