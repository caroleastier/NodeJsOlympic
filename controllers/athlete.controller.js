const Athlete = require('../src/models/athlete.model');
const Sport = require('../src/models/sport.model');
const mongoose = require('mongoose')

class AthleteController {

    // Non utilisé
    async list(req, res) {
        const athletes = await athletes.find();

        /*res.json({
            count: athletes.length,
            athletes: athletes
        });*/
        res.render('index', {
            athletes: athletes
        });
    }

    // Créer un athlète
    createAthletes = async (req, res, next) => {
        try {
            const athlete = new Athlete({
                lastName: req.body.lastName,
                firstName: req.body.firstName,
                age: req.body.age,
                country: req.body.country,
                sports: req.body.sports
            });

            const addAthlete = await athlete.save(); 

            res.status(201).json({athletes: addAthlete})        
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    // Lister les athlètes
    getAllAthletes = async (req, res, next) => {
        try {
            console.log(Athlete)
            const list = await Athlete.find();
            console.log(list)
            res.render('listAthletes', {
                athletes: list
            });
            //res.json({athletes: list})

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    // Consulter les sports d'un athlète
    getSportsByAthlete = async (req, res, next) => {
        try {
            const athlete = await Athlete.findById(req.params.athleteId);
            const sports = await Sport.find({ "athletes" : { $in : athlete._id}}).exec()
            console.log()
            /*res.render('index', {
            sports: list
            });*/

            res.json({sports})

        } catch (error) {
            res.status(400).send(error.message);
        }
    }



}

module.exports = AthleteController;