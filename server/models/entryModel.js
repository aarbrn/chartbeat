const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  username: {
    type: String, 
    required: true, 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  bloodSugar: {type: Number},
  sysPressure: {type: Number},
  diaPressure: {type: Number},
  beforeMeal: {type: Boolean},
});

module.exports = mongoose.model('Info', infoSchema);