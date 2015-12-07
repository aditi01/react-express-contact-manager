var mongoClient = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/contactsdb';
	mongoClient.connect(url, function(err, db) { //a connection with the mongodb is established here.
		console.log("Adding sample data...");

		var contactOptions = [
			{
				contactImg: "/img/faces/3.jpg",
				contactName: 'Terrence S. Hatfield',
				contactPhone: '651-603-1723',
				contactEmail: 'TerrenceSHatfield@rhyta.com'
			},
			{
				contactImg: "/img/faces/6.jpg",
				contactName: 'Chris M. Manning',
				contactPhone: '513-307-5859',
				contactEmail: 'ChrisMManning@dayrep.com'
			},
			{
				contactImg: "/img/faces/9.jpg",
				contactName: 'Ricky M. Digiacomo',
				contactPhone: '918-774-0199',
				contactEmail: 'RickyMDigiacomo@teleworm.us'
			},
			{
				contactImg: "/img/faces/14.jpg",
				contactName: 'Michael K. Bayne',
				contactPhone: '702-989-5145',
				contactEmail: 'MichaelKBayne@rhyta.com'
			},
			{
				contactImg: "/img/faces/5.jpg",
				contactName: 'John I. Wilson',
				contactPhone: '318-292-6700',
				contactEmail: 'JohnIWilson@dayrep.com'
			},
			{
				contactImg: "/img/faces/10.jpg",
				contactName: 'Rodolfo P. Robinett',
				contactPhone: '803-557-9815',
				contactEmail: 'RodolfoPRobinett@jourrapide.com'
			},

		];
		var collection = db.collection('contactsTable'); //referring to the table name-postTable. database-->collection--> documents
		for(var i=0; i< contactOptions.length; i++) {
			 collection.insert(contactOptions[i], function(err, result) {
	    		if(err) {
	    			console.log(err);
	    		}
	    		else{
	    			console.log("Contact information added");
	    		}
	  		});
		}
	});