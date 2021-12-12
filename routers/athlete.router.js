const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
    await athleteController.list(req, res);
});

<<<<<<< HEAD
router.get('/', athleteController.getAllAthletes);
=======
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
>>>>>>> c881462fa1f84036a31ab5534e0fb33463b7162d

module.exports = router;