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
    .post(athleteController.createAthletes);

router.route('/:athleteId/sports')
    .get(athleteController.getSportsByAthlete)


module.exports = router;