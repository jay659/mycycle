const mongoose = require("mongoose");
const CycleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  three_hour: {
    type: String,
    required: true,
  },
  twentyfour_hour: {
    type: String,
    required: true,
  },
  second_day: {
    type: String,
    required: true,
  },
  three_four_day: {
    type: String,
    required: true,
  },
  six_day_more: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cycle", CycleSchema);
