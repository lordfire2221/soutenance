const Note = require('../models/note');
const path = require('path');
const fs = require('fs');

exports.createNote = (req, res, next) => {
  const noteObject = req.body;
  const note = new Note({
    ...noteObject
  });

  note.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneNote = (req, res, next) => {
  Note.findOne({ _id: req.params.id }).
    populate('apprenant').
    exec(function (err, note) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(note);
    })
};

exports.modifyNote = (req, res, next) => {
  const noteObject = req.file ? {
    ...JSON.parse(req.body.note),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };

  delete noteObject._id;
  Note.findOne({ _id: req.params.id,type: req.params.type })
    .then((note) => {
      if (note.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Note.updateOne({ _id: req.params.id }, { ...noteObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteNote = (req, res, next) => {
  Note.findOne({ _id: req.params.id })
    .then(note => {
      if (note.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const filename = note.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Note.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
            .catch(error => res.status(401).json({ error }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllNote = (req, res, next) => {
  Note.find().
    populate('apprenant').
    exec(function (err, note) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(note);
    })
};
exports.getAllStats = (req, res, next) => {
  Note.find({type:req.params.type}).populate('apprenant').
  exec(function (err, note) {
    if (err) {
      res.status(404).json({
        error: err
      });
    }
    res.status(200).json(note);
  })
};
