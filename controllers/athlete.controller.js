const Athlete = require('../src/models/athlete.model');

class AthleteController {
    /**
     * Lister tous les athletes
     */
    async list(req, res) {
        const athletes = await athletes.find();

        res.json({
            count: athletes.length,
            athletes: athletes
        });
    }

    // ... A COMPLETER ...
}

module.exports = AthleteController;