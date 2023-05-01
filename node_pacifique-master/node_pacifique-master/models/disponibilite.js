const mongoose = require('mongoose');

const disponibiliteSchema = mongoose.Schema({
  type:{type:String,required:true},
  disponibilite: { type: [String], required: true },
  programed: { type: Boolean, required: true },
  apprenant: { type: mongoose.Schema.Types.ObjectId,ref: "Apprenant"}
});
module.exports = mongoose.model('Disponibilite', disponibiliteSchema);