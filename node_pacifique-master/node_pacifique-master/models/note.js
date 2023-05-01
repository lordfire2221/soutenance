const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  note: { type: Number, required: true },
  reponses: { type: String, required: true },
  type:{type:String,required:true},
  date:{type:Date,required:true},
  numero: { type: Number, required: true },
  apprenant: { type: mongoose.Schema.Types.ObjectId,ref: "Apprenant"}
});
module.exports = mongoose.model('Note', noteSchema);