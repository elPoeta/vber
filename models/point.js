const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = new Schema({
  coordinates: {
    type: [Number],
    index: '2dsphere'
  },
  type: {
    type: String,
    default: 'Point'
  }
});

module.exports = PointSchema;