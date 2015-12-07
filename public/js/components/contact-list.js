
var ContactList = React.createClass({
	getInitialState: function() {
		return{
		contacts: []
		}
	},

	fetchContactsFromServer: function() {
		$.ajax({
			url: '/contacts',
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				console.log(data);
				this.setState({
					contacts: data.output
				});
			}.bind(this),
			error: function(err) {
				console.log(err);
			}
		});
	},

	deleteContactFromServer: function(id) {
		$.ajax({
			url: '/contact/delete',
			type: 'POST',
			dataType: 'json',
			data: {contactObjId: id},
			success: function(data) {
				console.log(data);
				this.fetchContactsFromServer();

			}.bind(this),
			error: function(err) {
				console.log(err);
			}
		});
	},

	editContactFromServer: function(id, fullname, email, phone) { //editing the existing contact, where the parameters passed are the fields that can be edited and the id identifies the record in the db
		$.ajax({
			url: '/contact/edit',
			type: 'POST',
			dataType: 'json',
			data: {
				contactObjId: id,
				name: fullname,
				email: email,
				phone: phone
			},
			success: function(data) {
				console.log(data);
				this.fetchContactsFromServer();

			}.bind(this),
			error: function(err) {
				console.log(err);
			}
		});
	},

	componentDidMount: function() {
		this.fetchContactsFromServer();
	},

	render: function() {
		var that = this;
		var contactComponents = this.state.contacts.map(function(singlecontact, iterator) {

			return (
				<Contact 
					key = {iterator}
					contactId = {singlecontact['_id']}
					name = {singlecontact.contactName}
					img = {singlecontact.contactImg}
					phone = {singlecontact.contactPhone}
					email = {singlecontact.contactEmail}
					deleteContactFromServer = {that.deleteContactFromServer}
					editContactFromServer = {that.editContactFromServer} />
			);			
		});

		return(
			<div>
				<AddContact fetchContactsFromServer = {this.fetchContactsFromServer}/>
				<ul className="media-list row contacts-container">
					{contactComponents}
				</ul>
			</div>

		)
	}
});

window.ContactList = ContactList;