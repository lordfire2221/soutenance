const ApiUser =require('../models/userapi');
const { url } = require('inspector');
const uuidv4 = require('uuidv4');
const https =require('https');
const { hostname } = require('os');

exports.apiuser = (req, res, next) => {
  const element ={
     https:'//sandbox.momodeveloper.mtn.com/v1_0/apiuser HTTP/1.1',
     host : 'sandbox.momodeveloper.mtn.com' ,
     UserUuid : uuidv4(),
     Headers:{
      'Content-Type': 'application/json',
     },
     Primarykey : 'f998267788aa4da098e64ea02f3e7446',
     port: 443,
     path: '/endpoint',
     method: 'POST',
  }
  const requete =https.request(Creation,re)
  
};

exports.getUserStatus = (req, res, next) => {
  
};

exports.apiKey = (req, res, next) => {
  
};