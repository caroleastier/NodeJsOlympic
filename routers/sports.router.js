const express = require('express');
const router = express.Router();

const SportController = require('../controllers/sports.controller');
const sportController = new SportController();



router.route('/')
    .get(sportController.getAllSports)
    .post(sportController.createSports)

router.route('/:id/athletes')
    .get(sportController.getAthletesBySport)

router.route('/:sportId/athletes/:athleteId')
    .post(sportController.addAthleteBySport)

module.exports = router;