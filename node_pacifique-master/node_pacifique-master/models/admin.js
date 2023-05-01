const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = mongoose.Schema({
  email:{type:String,required:true,unique:true},
  dateNaissance: { type: Date, required: true },
  genre: { type: String, required: true },
  statut: { type: Boolean, required: true },
  lieuNaissance: { type: String, required: true },
  lieuResidence: { type: String, required: true },
  nom: { type: String, required: true },
  phone: { type: String, required: true },
});
adminSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Admin', adminSchema);