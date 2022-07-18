const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ConsultationSchema = new Schema({
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

const Consultation = mongoose.model("Consultation", ConsultationSchema);

module.exports = Consultation;