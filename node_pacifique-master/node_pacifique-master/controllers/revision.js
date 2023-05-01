const Revision = require('../models/revision');
const path = require('path');
const fs = require('fs');

exports.createRevision = (req, res, next) => {
  const revisionObject = req.body;
  const revision = new Revision({
    ...revisionObject
  });

  revision.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneRevision = (req, res, next) => {
  Revision.findOne({
    _id: req.params.id
  }).then(
    (revision) => {
      res.status(200).json(revision);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyRevision = (req, res, next) => {
  const revisionObject =  req.body;

  delete revisionObject._userId;
  Revision.findOne({ _id: req.params.id })
    .then((revision) => {
      if (req.auth.role != "superadmin"&&req.auth.role != "moniteur"&&req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Revision.updateOne({ _id: req.params.id }, { ...revisionObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteRevision = (req, res, next) => {
  Revision.findOne({ _id: req.params.id })
    .then(revision => {
      if (revision.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const filename = revision.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Revision.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
            .catch(error => res.status(401).json({ error }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllRevision = (req, res, next) => {
  Revision.find().then(
    (revisions) => {
      res.status(200).json(revisions);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
