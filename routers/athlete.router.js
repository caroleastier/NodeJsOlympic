const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
    athleteController.list(req, res);
});

router.get('/', athleteController.getAllAthletes);

module.exports = router;