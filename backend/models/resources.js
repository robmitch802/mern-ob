const mongoose = require('mongoose');
const { model } = require('./articles');

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    headline: String,
    content: String,
    link: String,
    linkText: String,
},{
    timestamps: true,
})

const Resource = mongoose.model('Resource', resourceSchema);

model.exports = Resource;