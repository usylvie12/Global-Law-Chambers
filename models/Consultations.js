const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ConsultationModel = mongoose.model("consultations", ConsultationSchema);
module.exports = ConsultationModel;