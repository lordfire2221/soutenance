const Presence = require('../models/presence');
const path = require('path');
const fs = require('fs');

exports.createPresence = (req, res, next) => {
  const presenceObject = req.body;
  const presence = new Presence({
    ...presenceObject
  });

  presence.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOnePresence = (req, res, next) => {
  Presence.findOne({ _id: req.params.id }).
    populate('apprenant').
    exec(function (err, presence) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(presence);
    })
};

exports.modifyPresence = (req, res, next) => {
  const presenceObject = req.body;

  delete presenceObject._id;
  Presence.findOne({ _id: req.params.id,type: req.params.type })
    .then((presence) => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Presence.updateOne({ _id: req.params.id }, { ...presenceObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deletePresence = (req, res, next) => {
  Presence.findOne({ _id: req.params.id,statut :{$eq:true}})
    .then(apprenant => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Presence.updateOne({ _id: req.params.id }, {status: false })
          .then(() => res.status(200).json({ message: 'Presence supprimé avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.activatePresence = (req, res, next) => {
  Presence.findOne({ _id: req.params.id})
    .then(apprenant => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Presence.updateOne({ _id: req.params.id }, {status: true })
          .then(() => res.status(200).json({ message: 'Presence restauré avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllPresence = (req, res, next) => {
  Presence.find().
    populate('apprenant').
    exec(function (err, presence) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(presence);
    })
};

exports.getAllPendingPresence = (req, res, next) => {
  Presence.find({satus:req.params.status}).
    populate('apprenant').
    exec(function (err, presence) {
      if (err) {
        res.status(404).json({
          error: err
        });
      }
      res.status(200).json(presence);
    })
};

exports.getPresenceByApprenant = (req, res, next) => {
  Presence.find({apprenant:req.body.apprenant,status:true}).then(
    (presences) => {
      res.status(200).json(presences);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
exports.getPresenceByApprenant = (req, res, next) => {
  Presence.find({apprenant:req.body.apprenant,status:true}).then(
    (presences) => {
      res.status(200).json(presences);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
exports.getPresenceByDate = (req, res, next) => {
  Presence.find({date:req.params.date,apprenant:req.params.apprenant}).then(
    (presences) => {
      res.status(200).json(presences);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
