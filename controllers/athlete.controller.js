const Athlete = require('../src/models/athlete.model');

class AthleteController {
    /**
     * Lister tous les athletes
     */
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

    getAllAthletes = async (req, res, next) => {
        console.log(Athlete)
        const list = await Athlete.find().exec();
        res.render('addSports', {
            athletes: list
        });
    }


    // ... A COMPLETER ...
}

module.exports = AthleteController;