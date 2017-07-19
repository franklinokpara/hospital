var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Patients = require('../models/patients');
var Verify = require('./verify');


var express = require('express');
var patientRouter=express.Router();

patientRouter.route('/')

.get(Verify.verifyOrdinaryUser,function(req,res,next){
	Patients.find({}, function(err,patient){
		if(err) throw err;
		res.json(patient);
	});
})

.post(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
	Patients.create(req.body, function(err,patient){
		if (err) throw err;

		console.log('Patient created!');
		var id = patient._id;
		res.writeHead(200, {
			'Content-Type':'text/plain'
		});
		res.end('Added patient with id:' +id);
	});
})

.delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req,res,next){
	Patients.remove({}, function(err,resp){
		if (err) throw err;
		res.json(resp);
	});
});

patientRouter.route('/:patientId')

.get(Verify.verifyOrdinaryUser, function(req,res,next){
	Patients.findById(req.params.patientId, function(err,patient){
		if(err) throw err;
		res.json(patient);
	});
})

.put(Verify.verifyOrdinaryUser,Verify.verifyAdmin,function(req, res, next){
	Patients.findByIdAndUpdate(req.params.patientId, {
		$set:req.body
	},{
		new:true
	}, function(err, patient){
		if (err) throw err;

		res.json(patient);
	});
}) 

.delete(Verify.verifyOrdinaryUser,Verify.verifyAdmin, function(req,res,next){
	Patients.remove(req.params.patientId, function(err, resp){
		if (err) throw err;

		res.json(resp);
	});
});


module.exports=patientRouter;


