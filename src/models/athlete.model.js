'use strict';

const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const athleteSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    age: Number,
    sport: Sports,
    country: String,
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;