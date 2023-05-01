const Apprenant = require('../models/apprenant');
const path = require('path');
const fs = require('fs')

exports.createApprenant = (req, res, next) => {
  // const { originalname, buffer, mimetype } = req.file;
  const apprenantObject = req.body;
  const apprenant = new Apprenant({
    // image:buffer,
    image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    ...apprenantObject,
  });
  apprenant.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneApprenant = (req, res, next) => {
  Apprenant.findOne({
    _id: req.params.id
  }).then(
    (apprenant) => {
      res.status(200).json(apprenant);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getOneApprenantByEmail = (req, res, next) => {
  Apprenant.findOne({
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
exports.modifyApprenant = (req, res, next) => {
  var apprenantObject = req.body
  req.file ? apprenantObject.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: apprenantObject = req.body
  Apprenant.findOne({ _id: req.params.id })
    .then((apprenant) => {
      if (req.auth.role != "superadmin"&&req.auth.role != "apprenant") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Apprenant.updateOne({ _id: req.params.id }, { ...apprenantObject})
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => {res.status(401).json({ message:"Vous n'êtes pas en mesure de modifier ce utilisateur." })});
      }
    })
    .catch((error) => {
      res.status(400).json({ message:"L'utilisateur que vous éssayez de modifier n'existe pas." });
      console.log(error)
    });
};


exports.deleteApprenant = (req, res, next) => {
  Apprenant.findOne({ _id: req.params.id,statut :{$eq:true}})
    .then(apprenant => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Apprenant.updateOne({ _id: req.params.id }, {statut: false })
          .then(() => res.status(200).json({ message: 'Apprenant supprimé avec succès!' }))
          .catch(error => res.status(401).json({ message:"Vous n'êtes pas en mesure de supprimer ce utilisateur." }));
      }
    })
    .catch(error => {
      res.status(500).json({ message:"L'utilisateur que vous éssayez de désactiver n'existe pas."  });
    });
};

exports.deleteDefApprenant = (req, res, next) => {
  Apprenant.findOne({ _id: req.params.id,statut :{$eq:true}})
    .then(apprenant => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const filename = apprenant.image.split('/images/')[1];
        fs.unlink(`images/${filename}`,()=>{
          Apprenant.deleteOne({_id:req.params.id})
          .then(()=>{res.status(200).json({message:'Apprenant supprimé!'})})
          .catch(error => res.status(401).json({message:"Erreur de suppression"}))
        })
      }
    })
    .catch(error => {
      res.status(500).json({ message:"L'utilisateur que vous éssayez de supprimer n'existe pas." });
    });
};

exports.activateApprenant = (req, res, next) => {
  Apprenant.findOne({ _id: req.params.id})
    .then(apprenant => {
      if (req.auth.role != "superadmin" && req.auth.role != "secretaire" && req.auth.role != "directeur") {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Apprenant.updateOne({ _id: req.params.id }, {statut: true })
          .then(() => res.status(200).json({ message: 'Apprenant restauré avec succès!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllApprenant = (req, res, next) => {
  Apprenant.find().then(
    (apprenants) => {
      res.status(200).json(apprenants);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
