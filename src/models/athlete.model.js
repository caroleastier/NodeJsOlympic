'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    age: Number,
    country: String,
}, {
    versionKey: false
}
);

module.exports = mongoose.model('Athlete', athleteSchema);