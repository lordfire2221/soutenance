const express = require('express');
const app = express();
const stuffRoutes = require('./routes/stripe');
const userRoutes = require('./routes/momo');
const path = require('path');

app.use('/api/stripe', stuffRoutes);
app.use('/api/momo', userRoutes);
app.use('/api/user', userRoutes);

module.exports = app;