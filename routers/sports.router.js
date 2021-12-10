const express = require('express');
const router = express.Router();

const SportController = require('../controllers/sports.controller');
const sportController = new SportController();

// A enlever plus tard
const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@cluster0.6xtj1.mongodb.net/OlympicDatabase?retryWrites=true&w=majority";


router.get('/updateSports/:id', sportController.getUpdateSports);
//router.post('/updateSports/:id', sportController.updateSports);

router.get('/sports/', async (req, res) => {
    sportController.list(req, res);
});

router.get('/createSports', (req, res) => {
    res.render('addSports');
  });

router.post ('/createSports', function(req,res,next) {
    console.log(req.body)
    let item = {
        name: req.body.name,
    };
    mongoose.connect(uri, function (err, db) {
        //assert.equal(null, err);
        db.collection('Sports').insertOne(item, function (err, result) {
            //assert.equal(null, err);
            console.log('item has been inserted');
            db.close;
        });
    });
  
    res.redirect('/');
  });

// Example
router.get('/sportss', (request, response) => {
    const sports = [
      {
        name : 'Handball'
      },
      {
        name : 'Course à pied'
      }
    ];
    response.send(sports);
})


//module.exports = router;
module.exports = {
    routes: router
}