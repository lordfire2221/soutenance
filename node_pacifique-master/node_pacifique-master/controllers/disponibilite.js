const Disponibilite = require('../models/disponibilite');
const path = require('path');
const fs = require('fs');

exports.createDisponibilite = (req, res, next) => {
  const disponibiliteObject = req.body;
  const disponibilite = new Disponibilite({
    ...disponibiliteObject
  });

  disponibilite.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' });
  })
    .catch(error => { res.status(400).json({ error }) })
};


exports.getOneDisponibilite = (req, res, next) => {
  Disponibilite.findOne({ _id: req.params.id }).then(
    (disponibilite) => {
      res.status(200).json(disponibilite);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
exports.getOneDisponibiliteByApprenant = (req, res, next) => {
  Disponibilite.findOne({type:req.params.type,apprenant:req.params.apprenant }).then(
    (disponibilite) => {
      res.status(200).json(disponibilite);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
exports.getDisponibiliteByType = (req, res, next) => {
  Disponibilite.find({type:req.params.type,programed:false }).populate('apprenant').
  exec(function (err, programme) {
    console.log(res)
    if (err) {
      res.status(404).json({
        error: err
      });
    }
    res.status(200).json(programme);
  })
  // .then(
  //   (disponibilite) => {
  //     res.status(200).json(disponibilite);
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(404).json({
  //       error: error
  //     });
  //   }
  // );
};

exports.modifyDisponibilite = (req, res, next) => {
  const disponibiliteObject = req.body;

  delete disponibiliteObject._id;
  Disponibilite.findOne({ _id: req.params.id })
    .then((disponibilite) => {
      if (req.auth.role != "apprenant") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Disponibilite.updateOne({ _id: req.params.id }, { ...disponibiliteObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteDisponibilite = (req, res, next) => {
  Disponibilite.findOne({ _id: req.params.id,programed :{$eq:true}})
    .then(apprenant => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Disponibilite.updateOne({ _id: req.params.id }, {programed: true })
          .then(() => res.status(200).json({ message: 'Disponibilite supprimé avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.activateDisponibilite = (req, res, next) => {
  Disponibilite.findOne({ _id: req.params.id})
    .then(apprenant => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Disponibilite.updateOne({ _id: req.params.id }, {programed: false })
          .then(() => res.status(200).json({ message: 'Disponibilite restauré avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllDisponibilite = (req, res, next) => {
  Disponibilite.find().
    populate('apprenant').
    exec(function (err, disponibilite) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(disponibilite);
    })
};
exports.getAllDisponibiliteByStatus = (req, res, next) => {
  Disponibilite.find({programed:req.params.status}).
    populate('apprenant').
    exec(function (err, disponibilite) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(disponibilite);
    })
};
