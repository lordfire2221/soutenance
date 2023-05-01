const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const exerciceSchema = mongoose.Schema({
  num: { type: Number, required: true, unique: true },
  questions: [
    {
      corrige: { type: [String], default: [], required: true }, 
      image: { type: String, required: false},
      quiz: { type: String, required: true },
      propositions: [
        { 
          val: { type: String, required: true },
          lab: { type: String, required: true },
          isChecked: { type: Boolean, required: true, default:false}
        }
      ]
    }
  ],
  imagePrinc: { type: String, required: false }
});
exerciceSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Exercice', exerciceSchema);