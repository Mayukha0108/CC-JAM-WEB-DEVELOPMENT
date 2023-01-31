const mongoose=require('mongoose');
const sadist2=new mongoose.Schema({
    question: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    },
    option1: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    },
    option2: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    },
    option3: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    },
    option4: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    },
    correct: {
        type:String,
        require:"This field is required",
        trim:true //to omit white spaces
    }
});

module.exports=mongoose.model('Question',sadist2);