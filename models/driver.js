const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PointSchema = require('./point');

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  isDriving: {
    type: Boolean,
    default: false
  },
  geometry: {
    type: PointSchema
  }
});

const Driver = new mongoose.model('driver', DriverSchema);

module.exports = Driver;