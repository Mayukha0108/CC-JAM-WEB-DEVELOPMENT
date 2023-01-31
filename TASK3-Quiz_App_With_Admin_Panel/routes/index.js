var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', controller.adminPage);

router.post('/admin', controller.adPost);

router.post('/questions', controller.questionsPost);

router.get('/quiz', controller.quizPage);
module.exports = router;
