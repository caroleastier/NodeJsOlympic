'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportsSchema = new mongoose.Schema({
    name: String,
    category: String,
    athletes : [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]
});

const Sports = mongoose.model('Sports', sportsSchema);

module.exports = Sports;