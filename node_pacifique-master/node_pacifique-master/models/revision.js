const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const revisionSchema = mongoose.Schema({
  num: { type: Number, required: true},
  questions: [
    {
      corrige: { type: [String], default: [], required: true }, 
      propositions: [
        { 
          val: { type: String, required: true },
          lab: { type: String, required: true },
          isChecked: { type: Boolean, required: true, default:false}
        }
      ]
    }
  ]
});
revisionSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Revision', revisionSchema);
