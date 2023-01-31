const mongoose=require('mongoose');
const sadist=new mongoose.Schema({
    email: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    },
    password: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    }
});

module.exports=mongoose.model('User',sadist);