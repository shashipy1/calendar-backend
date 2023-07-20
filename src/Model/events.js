const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
    unique: true,
  },
  date:{
    type: String,
    required: true,
    unique: true,
  },
  startTime: {
    type: String,
    required: true,
    unique: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Events', eventsSchema);
 
