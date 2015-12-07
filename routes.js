function initialize(app, db) {
	var mongodb = require("mongodb");
	var mongoClient = require("mongodb").MongoClient;

	console.log("Request about to be routed");
	app.get('/', function(req, res) { // GET ajax request for Requesting to display of the HTML page
		console.log("Request to / has been recieved");
		res.render('index.html'); //renders the html page onto the browser
	});

	app.get('/contacts', function(req, res) { // GET ajax request to display the database items that are stored in the mongodb
		console.log("Getting data from the database");
		var collection = db.collection('contactsTable'); //referring to the table name-postTable. database-->collection--> documents
		  collection.find({}).toArray(function(err, contacts) { //find({}) displays all the records that are stored in the database.s
		    console.log("Found the following records");
		    console.log(contacts);
		    res.json({
		    	message: "The data is:",
		    	output: contacts
		    });
		});

	});

	app.post('/contact/add', function(req, res) { //POST ajax request to send the data from the browser to the server and stored in the database.
		var obj = req.body;
		console.log(obj);
		var collection = db.collection('contactsTable');
  	 	collection.insert(obj, function(err, result) {
    		if(err) {
    			res.json({
    				message: "error in saving contact"
    			});
    		}
    		else{
    			res.json({
    				message: "success"
    			});
    			console.log(result);
    		}
  		});
	});

	app.post('/contact/delete', function(req, res) { //POST ajax request to send the data from the browser to the server and stored in the database.
		var obj = req.body;
		console.log(req.body);
		var collection = db.collection('contactsTable');
  	 	collection.remove({'_id': new mongodb.ObjectID(req.body.contactObjId)}, function(err, result) {
    		console.log(result);
    		if(err) {
    			res.json({
    				message: "error in deleting contact"
    			});
    		}
    		else{
	    		res.json({
	    			message: "success"
	    		});
	    	}
  		});
	});

	app.post('/contact/edit', function(req, res) { //POST ajax request to send the data from the browser to the server and stored in the database.
		var obj = req.body;
		console.log(req.body);
		var collection = db.collection('contactsTable');
  	 	collection.update({
  	 		'_id': new mongodb.ObjectID(req.body.contactObjId)
  	 	},{
  	 		$set: {
  	 			contactName: req.body.name,
  	 			contactEmail: req.body.email,
  	 			contactPhone: req.body.phone,
  	 		}, 
  	 	},function(err, result) {
    		console.log(result);
    		if(err) {
    			res.json({
    				message: "error in editing contact"
    			});
    		}
    		else{
	    		res.json({
	    			message: "success"
	    		});
	    	}
  		});
	});
}

exports.initialize = initialize;
