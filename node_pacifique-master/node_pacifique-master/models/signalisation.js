const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const signalisationSchema = mongoose.Schema({
  type: { type: String, required: true },
  num: { type: Number, required: true ,unique: true },
    panneaux: [
      {
        image: { type: String, required: true },
        nom: { type: String, required: true },
        description: { type: String, required: false },
        commentaire: { type: String, required: false }
      }]
});
signalisationSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Signalisation', signalisationSchema);