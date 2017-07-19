//grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var patientSchema = new Schema({
	firstname: {
		type: String,
		required: true,
		unique: true
	},
	lastname: {
		type: String,
		required: true,
		unique: true
	},
	phonenumber: {
		type: Number,
		required: true,
		unique: true
	},
	gender: {
		type: String,
		required: true,
		unique: true
	},
	address: {
		type: String,
		required: true,
		unique: true
	},
	dateofbirth: {
		type: Date,
		required: true,
		unique: true
	},
	hometown: {
		type: String,
		required: true,
		unique: true
	},
	state: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	nextofkin_firstname: {
		type: String,
		required: true,
		unique: true
	},
	nextofkin_lastname: {
		type: String,
		required: true,
		unique: true
	},
	nextofkin_phonenumber: {
		type: Number,
		required: true,
		unique: true
	}
},{
	timestamps: true
});

//creating a model using it
var Patients = mongoose.model('Patient',patientSchema);

//making this available for node application
module.exports = Patients;