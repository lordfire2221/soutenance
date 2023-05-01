const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const presenceSchema = mongoose.Schema({
  cours:{type:String,required:true},
  date: { type: String, required: true },
  heure: { type: String, required: true },
  compteur: { type:Number,required:true},
  apprenant: { type:String,required:true},
  status: { type: Boolean, required: true }
});
presenceSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Presence', presenceSchema);