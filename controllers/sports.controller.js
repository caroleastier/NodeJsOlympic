const Sports = require('../src/models/sports.model');

class SportsController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sports.find();

        res.json({
            count: sports.length,
            sports: sports
        });
    };

    // Update
    getUpdateSports = async (req, res, next) => {
        try {
            const id = req.params.id;
            const mySport = await Sports.findById(id).exec();
            res.render('updateSports', {
                Sports: mySport,
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    // Update
    updateSports = async(req, res, next) => {
        const {error} = validate(req.body);
        if (error) return res.status(422).send(error.details[0].message);
        const id = req.params.id;
        const data = req.body;
        let Sports = await Sports.findByIdAndUpdate(id, {
            name: data.name,
            category: data.category,
            Athletes: data.athletes,
        }, {new: true});
        if(!Sports) return res.status(404).send('Sports with the given id not found');
    
        res.redirect('/');
    };


    getDeleteSport = async (req, res, next) => {
        try {
            const id = req.params.id;
            const mySport = await Customer.findById(id).exec();
            res.render('deleteSport', {
                sport: mySport
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    };
    
    deleteSport = async (req, res, next) => {
        try {
            const id = req.params.id;
            const sport = await Sport.findByIdAndRemove(id);
            if(!sport) return res.status(404).send('Sport non trouvé !');
            res.redirect('/');        
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

}

module.exports = SportsController;