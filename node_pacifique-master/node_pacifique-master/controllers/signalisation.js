const Signalisation = require('../models/signalisation');
const path = require('path');
const fs = require('fs');

exports.createSignalisation = (req, res, next) => {
  const signalisationObject = req.body;
  const signalisation = new Signalisation({
    ...signalisationObject
  });
  signalisation.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneSignalisation = (req, res, next) => {
  Signalisation.findOne({
    _id: req.params.id
  }).then(
    (signalisation) => {
      res.status(200).json(signalisation);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifySignalisation = (req, res, next) => {
  const signalisationObject = req.body
  delete signalisationObject._id;
  Signalisation.findOne({ _id: req.params.id })
    .then((signalisation) => {
      if (req.auth.role !== "superadmin" || req.auth.role !== "moniteur" || req.auth.role !== "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Signalisation.updateOne({ _id: req.params.id }, { ...signalisationObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteSignalisation = (req, res, next) => {
  Signalisation.findOne({ _id: req.params.id })
    .then(signalisation => {
      if (signalisation.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const filename = signalisation.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Signalisation.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
            .catch(error => res.status(401).json({ error }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllSignalisation = (req, res, next) => {
  Signalisation.find().then(
    (signalisations) => {
      res.status(200).json(signalisations);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
