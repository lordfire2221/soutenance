const Programme = require('../models/programme');
const moment= require('moment')
const fs = require('fs');

exports.createProgramme = (req, res, next) => {
  const programmeObject = req.body;
  const programme = new Programme({
    ...programmeObject
  });

  programme.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneProgramme = (req, res, next) => {
  Programme.findOne({ _id: req.params.id }).
    populate('apprenant').
    exec(function (err, programme) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(programme);
    })
};

exports.modifyProgramme = (req, res, next) => {
  const programmeObject = req.body;
  delete programmeObject._id;
  Programme.findOne({ _id: req.params.id })
    .then((programme) => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Programme.updateOne({ _id: req.params.id }, { ...programmeObject })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteProgramme = (req, res, next) => {
  Programme.findOne({ _id: req.params.id })
    .then(programme => {
      if (programme.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const filename = programme.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Programme.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
            .catch(error => res.status(401).json({ error }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllProgramme = (req, res, next) => {
  Programme.find().
    populate('apprenant').
    exec(function (err, programme) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(programme);
    })
};
exports.getProgrammeByType = (req, res, next) => {
  const today = moment();
  const thisMonday = today.startOf('week');
  thisMonday.format('ddd, MMMM Do YYYY');
  Programme.find({ type: req.params.type, semaine: thisMonday.format('ddd, MMMM Do YYYY')  }).
    populate('apprenant').
    exec(function (err, programme) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(programme);
    })
};
exports.getProgrammeByApprenant = (req, res, next) => {
  const today = moment();
  const thisMonday = today.startOf('week');
  thisMonday.format('ddd, MMMM Do YYYY');
  Programme.find({ type: req.params.type, apprenant: req.params.apprenant, semaine: thisMonday.format('ddd, MMMM Do YYYY') }).
    populate('apprenant').
    exec(function (err, programme) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(programme);
    })
};
exports.getProgrammeByDate = (req, res, next) => {
  const today = moment();
  const thisMonday = today.startOf('week');
  Programme.find({ jour: req.params.date, apprenant: req.params.apprenant,type:req.params.type,semaine:thisMonday.format('ddd, MMMM Do YYYY') }).
    populate('apprenant').
    exec(function (err, programme) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(programme);
    })
};
