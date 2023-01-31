const mongoose=require('mongoose');
const m= require("../models/adminLogin");
const ques=require("../models/questions");

exports.adminPage = (req, res) => {
        res.render('admin', {title: 'Admin Page'});
}

exports.adPost = async(req,res,next) => { //to asynchronize it from being syncronous, whenever we use await keyword, we have to put async
        try {
                const { email, password } = req.body;
                const x = new m({
                    email: email,
                    password: password
                });
                const entry = await m.findOne({email});
                if(entry) {
                   res.render('questions', {title: 'Add New Questions',entry});
                }
                else{
                    res.render('admin', {title: 'Login Failed :('});
                }
            } catch (err) {
                console.error(err);
                res.status(500).send('Error occurred');
            }
}

exports.questionsPost = async(req,res) => {
        try {
                const {question,option1,option2,option3,option4,correct} = req.body;
                const x= new ques ({
                        question: question,
                        option1: option1,
                        option2: option2,
                        option3: option3,
                        option4: option4,
                        correct: correct
                });
               await x.save();
               console.log(question);
        }
        catch(err) {
                console.error(err);
                res.status(500).send('Error occurred');
        }
        res.render('questions', {title: 'Add New Questions'});
}

exports.quizPage = async(req,res) => {
        try {
                const allquestions = await ques.find();
                res.render('quiz', {title: "Take the Quizz", allquestions});
                }
                catch(err) {
                        console.error(err);
                        res.status(500).send('Error occurred');
                }
}