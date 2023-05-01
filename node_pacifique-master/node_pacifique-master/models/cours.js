const mongoose = require('mongoose');

const coursSchema = mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Buffer, required: true,default:"" },
  sous_chapitre: [
    {
      paragraphes: [
        {
          contenu: { type: String, required: true },
          image: { type: Buffer, required: true,default:"" },
          titre: { type: String, required: true }
        }
      ],
      titre: { type: String, required: false }
    }
  ],
  num: { type: Number, required: true },
  deleted_at: { type: Date, default: null }
});

module.exports = mongoose.model('Cours', coursSchema);