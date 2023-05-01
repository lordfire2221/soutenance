const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  image: { type: Buffer, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true }
});
module.exports = mongoose.model('Image', imageSchema);