const Image = require('../models/image');
const path = require('path');
const fs = require('fs');

exports.createImage = (req, res, next) => {
  const imageObject = req.body;
  const { originalname, buffer, mimetype } = req.file;
  const image = new Image({
    ...imageObject,
    image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    name:originalname
  });
  image.save()
    .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
    .catch(error => { res.status(400).json({ error }) })
};

exports.getOneImage = (req, res, next) => {
  Image.findOne({
    _id: req.params.id
  }).then(
    (image) => {
      res.status(200).json(image);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyImage = (req, res, next) => {
  const imageObject = req.body;
  Image.findOne({ _id: req.params.id })
    .then((image) => {
      if (image.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        Image.updateOne({ _id: req.params.id }, { ...imageObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié!' }))
          .catch(error => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteImage = (req, res, next) => {
  Image.findOne({ _id: req.params.id })
    .then(image => {
      if (image.userId != req.auth.userId) {
        res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
      } else {
        const filename = image.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Image.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
            .catch(error => res.status(401).json({ error }));
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getAllImage = (req, res, next) => {
  Image.find({type:req.params.type}).then(
    (images) => {
      res.status(200).json(images);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
