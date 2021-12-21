const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

// Non utilisé
router.get('/athletes/', async (req, res) => {
    await athleteController.list(req, res);
});


router.route('/')
    .get(athleteController.getAllAthletes)
    .post(athleteController.createAthletes)

router.route('/:athleteId/sports')
    .get(athleteController.getSportsByAthlete)

router.get('/addAthlete', function (req, res) {
    res.render('addAthlete')
})

/*router.get('/style.css', function (req, res) {
    res.send('style')
})*/

module.exports = router;