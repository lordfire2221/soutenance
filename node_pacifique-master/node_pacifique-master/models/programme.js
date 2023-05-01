const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const programmeSchema = mongoose.Schema({
  type:{type:String,required:true},
  tours:{type:Number,required:true},
  semaine: { type: String, required: true },
  heure: { type: String, required: true },
  apprenant: { type: mongoose.Types.ObjectId, ref:'Apprenant'},
  jour: { type: String, required: true }
});
programmeSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Programme', programmeSchema);