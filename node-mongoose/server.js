var mongoose = require('mongoose'),
	assert = require('assert');

var Patients = require('./models/patients');

//Connection URl
var url = 'mongodb://localhost:27017/confusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
	//you're connected!
	console.log("Connected correctly to server");
});

// 	//create a new patient
// 	Patients.create({
// 		firstname:"",
// 		lastname:"",
// 		phonenumber:"",
// 		address:"",
// 		dateofbirth:"",
// 		hometown:"",
// 		state:"",
// 		email:"",
// 		nextofkin_firstname:"",
// 		nextofkin_lastname:"",
// 		nextofkin_phonenumber:""
// 	}, function (err, patient){
// 		if (err) throw err;

// 		console.log("Patient created!");
// 		console.log(patient);
// 		var id = patient._id;

// 		//get all the patients
// 		setTimeout(function(){
// 			Patients.findByIdAndUpdate(id, {
// 				$set: {
// 					description: 'Updated Test'
// 				}
// 			},{
// 				new:true
// 			})
// 			.exec(function(err,dish){
// 				if(err) throw err;
// 				console.log('Updated Patient!');
// 				console.log(patient);
// 			})
// 		}, 3000);
// 	});

// });
