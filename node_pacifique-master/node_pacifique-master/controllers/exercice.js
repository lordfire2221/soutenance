const Exercice = require('../models/exercice');
const path = require('path');
const fs = require('fs');

exports.createExercice = (req, res, next) => {
  const exerciceObject = req.body;
  const exercice = new Exercice({
    ...exerciceObject
  });

  exercice.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneExercice = (req, res, next) => {
  Exercice.findOne({
    _id: req.params.id
  }).then(
    (exercice) => {
      res.status(200).json(exercice);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyExercice = (req, res, next) => {
  var exerciceObject = req.body
  req.file ? exerciceObject.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : exerciceObject = req.body
  Exercice.findOne({ _id: req.params.id })
    .then((exercice) => {
      if (req.auth.role != "superadmin" && req.auth.role != "moniteur" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Exercice.updateOne({ _id: req.params.id }, { ...exerciceObject })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteExercice = (req, res, next) => {
  Exercice.findOne({ _id: req.params.id })
    .then(exercice => {
      if (exercice.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const filename = exercice.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`,()=>{
          Exercice.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
            .catch(error => res.status(401).json({ error }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllExercice = (req, res, next) => {
  Exercice.find().then(
    (exercices) => {
      res.status(200).json(exercices);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
