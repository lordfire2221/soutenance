const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apprenantRoutes = require('./routes/apprenant');
const coursRoutes = require('./routes/cours');
const imagesRoutes = require('./routes/image');
const disponibiliteRoutes = require('./routes/disponibilite');
const noteRoutes = require('./routes/note');
const adminRoutes = require('./routes/admin');
const exerciceRoutes = require('./routes/exercice');
const presenceRoutes = require('./routes/presence');
const programmeRoutes = require('./routes/programme');
const revisionRoutes = require('./routes/revision');
const signalisationRoutes = require('./routes/signalisation');
const userRoutes = require('./routes/user');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/pacifiqueapp',
// mongoose.connect('mongodb+srv://gyd_mongo_db_0:ILnkMpC5KSorPF2K@cluster0.tpf4nst.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Connexion à MongoDB échouée !',error));
  
  app.use(cors({
    origin:[
      'http://localhost:4200',
      'http://localhost:8100',
      'https://pacifique-pwa.web.app',
      'https://admin-pacifique.web.app'
    ]
  }))
  app.use(bodyParser.json({ limit: '16MB' }))
  app.use(bodyParser.urlencoded({
    extended:false
  }))
  // app.use(express.json({ limit: '16MB' }))
  app.use('/api/apprenant', apprenantRoutes);
  app.use('/api/disponibilite', disponibiliteRoutes);
  app.use('/api/cours', coursRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/image', imagesRoutes);
  app.use('/api/user', userRoutes);
  app.use('/api/exercice', exerciceRoutes);
  app.use('/api/presence', presenceRoutes);
  app.use('/api/revision', revisionRoutes);
  app.use('/api/note', noteRoutes);
  app.use('/api/programme', programmeRoutes);
  app.use('/api/signalisation', signalisationRoutes);
  app.use('/images', express.static(path.join(__dirname, 'images')));
  
module.exports = app;