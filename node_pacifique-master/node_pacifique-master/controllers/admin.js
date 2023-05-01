const Admin = require('../models/admin');
const path = require('path');
const fs = require('fs');

exports.createAdmin = (req, res, next) => {
  const adminObject = req.body;
  const admin = new Admin({
    ...adminObject,
  });
  admin.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error })})
};

exports.getOneAdmin = (req, res, next) => {
  Admin.findOne({
    _id: req.params.id
  }).then(
    (admin) => {
      res.status(200).json(admin);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getOneAdminByEmail = (req, res, next) => {
  Admin.findOne({
    email: {$eq:req.params.email},
    statut :{$eq:true}
  }).then(
    (cours) => {
      res.status(200).json(cours);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        message: "Vous n'êtes pas autorisé à accéder au service.Contactez le service clientele pour plus d'informations."
      });
    }
  );
};
exports.modifyAdmin = (req, res, next) => {
  const adminObject =  req.body;
  delete adminObject._id;
  Admin.findOne({ _id: req.params.id })
    .then((admin) => {
      if (req.auth.role != "superadmin") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Admin.updateOne({ _id: req.params.id }, { ...adminObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};


exports.deleteAdmin = (req, res, next) => {
  Admin.findOne({ _id: req.params.id,statut :{$eq:true}})
    .then(admin => {
      if (req.auth.role != "superadmin") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Admin.updateOne({ _id: req.params.id }, {statut: false })
          .then(() => res.status(200).json({ message: 'Admin supprimé avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.activateAdmin = (req, res, next) => {
  Admin.findOne({ _id: req.params.id})
    .then(admin => {
      if (req.auth.role != "superadmin") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Admin.updateOne({ _id: req.params.id }, {statut: true })
          .then(() => res.status(200).json({ message: 'Admin restauré avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllAdmin = (req, res, next) => {
  Admin.find().then(
    (admins) => {
      res.status(200).json(admins);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
