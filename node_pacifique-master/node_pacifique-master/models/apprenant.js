const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const apprenantSchema = mongoose.Schema({
  email:{type:String,required:true,unique:true},
  dateNaissance: { type: Date, required: true },
  dateDebut: { type: Date, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true,default:"" },
  lieuNaissance: { type: String, required: true },
  lieuResidence: { type: String, required: true },
  nom: { type: String, required: true },
  cours: { type: String, required: true },
  statut: { type: Boolean, required: true },
  phone: { type: String, required: true },
});
apprenantSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Apprenant', apprenantSchema);