'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new mongoose.Schema({
    name: String,
    category: String,
    athletes : [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]
}, {
    versionKey: false
});

module.exports = mongoose.model('Sport', sportSchema);