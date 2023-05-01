const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.phone, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                role: req.body.role,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ message: "OOPSS!!Un utilisateur avec les mêmes identifiants existe déjà" }));
        })
        .catch((error) => {
            res.status(500).json({ message: "Il s'agit d'une erreur interne au serveurs veuillez réessayr plus tard. Merci!!!" });
        });
};
exports.ping = (req, res, next) => {
    res.status(200).json({ message: 'Connecté',status:1 })
};

exports.login = (req, res, next) => {
    User.findOne({ email: { $eq: req.body.username } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {
                                userId: user._id,
                                role: user.role
                            },
                            "azerty@1234567890$$",
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ message:"Vous n'avez pas de compte sur le système" }));
};
exports.resetPassword = (req, res, next) => {
    const userObject = req.body;
    delete userObject._id;
    User.findOne({ email: req.params.email })
        .then((user) => {
            if (user._id != req.auth.userId) {
                res.status(401).json({ message: 'Vous n\'êtes pas autorisés à effectuer cette oppération' });
            } else {
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        const Userdata = new User({
                            email: user.email,
                            role: user.role,
                            password: hash
                        });
                        User.updateOne({ _id: req.params.id }, { ...Userdata, _id: req.params.id })
                            .then(() => res.status(200).json({ message: 'Utilisateur modifié!' }))
                            .catch(error => res.status(401).json({ error }));
                    })
                    .catch(error => res.status(500).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
    delete userObject.password;
};
exports.getOneUser = (req, res, next) => {
    User.findOne({
        _id: req.params.id
    }).then(
        (user) => {
            res.status(200).json(user);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
