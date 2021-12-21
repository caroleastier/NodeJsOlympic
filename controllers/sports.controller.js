const Sport = require('../src/models/sport.model');
const Athlete = require('../src/models/athlete.model')
const mongoose = require('mongoose')


class SportsController {

    // Non utilisé
    async list(req, res) {
        const sports = await Sports.find();

        res.json({
            count: sports.length,
            sports: sports
        });
    };

    // Créer un sport
    createSports = async (req, res, next) => {
        try {
            const sport = new Sport({
                name: req.body.name,
                category: req.body.category,
                athletes: req.body.athletes
            });

            const addSport = await sport.save(); 

            //res.status(201).json({sports: addSport}) 
            const list = await Sport.find();
            res.render('listSports', {
                sports: list
            });    
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    // Lister les sports
    getAllSports = async (req, res, next) => {
        try {
            const list = await Sport.find();
            res.render('listSports', {
                sports: list
            });
            //res.json({sports: list})
    
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    // Consulter les athlètes d'un sport
    getAthletesBySport = async (req, res, next) => {
        try {
            const sport = await Sport.findById(req.params.id);
            const athletesIds = sport.athletes;

            const athletes = await Athlete.find({ "_id" : { $in : athletesIds}})

            res.render('AthletesBySport', {
            sports: sport,
            athletes: athletes
            });
            //res.json({athletes})

        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    // Ajouter un athlète dans un sport
    addAthleteBySport = async (req, res, next) => {
        try {
            const sport = await Sport.findById(req.params.sportId)

            sport.name = sport.name,
            sport.category = sport.category,
            sport.athletes =  [req.params.athleteId, ...sport.athletes]

            const newAthleteOnSport = await sport.save();

            res.status(200).res.json(newAthleteOnSport)

        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = SportsController;