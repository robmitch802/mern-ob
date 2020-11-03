const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inequitySchema = new Schema({
    headline: String,
    content: String
}, {
    timestamps: true,
})

const Inequity = mongoose.model('Inequity', inequitySchema);

module.exports = Inequity;