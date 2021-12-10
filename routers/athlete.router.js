const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
    await athleteController.list(req, res);
});

router.get('/createAthlete', (req, res) => {
    res.render('addAthlete');
});

router.post ('/createAthlete', function(req,res) {
    console.log(req.body);
    let item = {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        age: req.body.age,
        country: req.body.country,
    };
    mongoose.connect(uri, function (err, db) {
        //assert.equal(null, err);
        db.collection('Athlete').insertOne(item, function (err, result) {
            //assert.equal(null, err);
            console.log('item has been inserted');
            db.close;
        });
    });
    res.redirect("/");
});

module.exports = router;