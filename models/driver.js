const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PointSchema = require('./point');

const DriverSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
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