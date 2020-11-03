const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const meetingsSchema = new Schema({
    date: { type: Date, required: true },
    location: String, 
    time: String,
    link: String,
    agenda: String,
    minutes: String,
    featured: Boolean,
},
{
    timestamps: true,
})

const Meeting = mongoose.model('Meeting', meetingsSchema);

module.exports = Meeting;