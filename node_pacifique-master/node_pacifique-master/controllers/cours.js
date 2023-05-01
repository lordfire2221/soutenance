const Cours = require('../models/cours');
const path = require('path');
const fs = require('fs');

exports.createCours = (req, res, next) => {
  const coursObject = req.body;
  const cours = new Cours({
    ...coursObject
  });

  cours.save()
    .then(() => { res.status(201).json({ message: 'Cours enregistrée!' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneCours = (req, res, next) => {
  Cours.findOne({
    _id: req.params.id,
    deleted_at :{$eq:null},
    consulted: {$lt:2}
  }).then(
    (cours) => {
      res.status(200).json(cours);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getOneCoursByNum = (req, res, next) => {
  Cours.findOne({
    num: req.params.num,
    deleted_at :{$eq:null}
  }).then(
    (cours) => {
      res.status(200).json(cours);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyCours = (req, res, next) => {
  const coursObject = req.body
  Cours.findOne({ _id: req.params.id,deleted_at :{$eq:null} })
    .then((cours) => {
      if (req.auth.role != "superadmin"&&req.auth.role != "moniteur"&&req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Cours.updateOne({ _id: req.params.id }, { ...coursObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Cours Modifiée avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteCours = (req, res, next) => {
  Cours.findOne({ _id: req.params.id,deleted_at :{$eq:null}})
    .then(cours => {
      if (cours.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const now = new Date();
        Cours.updateOne({ _id: req.params.id }, {deleted_at: now })
          .then(() => res.status(200).json({ message: 'Requette annulée avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllCours = (req, res, next) => {
  Cours.find({deleted_at :{$eq:null}}).then(
    (courss) => {
      res.status(200).json(courss);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
