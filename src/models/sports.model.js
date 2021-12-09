'use strict';

const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const sportsSchema = new mongoose.Schema({
    name: String,
    category: String,

    // ... A COMPLETER ...
    // Exemple :
    // athletes : [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]
});

const Sports = mongoose.model('Sport', sportsSchema);

module.exports = Sports;