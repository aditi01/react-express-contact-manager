
var EditContact = React.createClass({
	getInitialState: function() {
		return {
			contactId: this.props.contactId,
			name: this.props.name,
			email: this.props.email,
			phone: this.props.phone
		}
	},

	editContactInfo: function() {
		var fullNameEdit = document.getElementById("fullNameEdit");
		var emailEdit = document.getElementById("emailEdit");
		var phoneEdit = document.getElementById("phoneEdit");
		this.props.editContactFromServer(this.props.contactId,fullNameEdit.value, emailEdit.value, phoneEdit.value);
		Avgrund.hide();
	},	

	showPopup: function() {
		Avgrund.show( "#edit-contact" );
	},

	closePopup: function() {
		Avgrund.hide();
	},

	componentDidMount: function() {
		this.showPopup();
	},

	componentWillReceiveProps: function(nextProps) {
  		console.log(nextProps);
  		this.setState({
  			contactId: nextProps.contactId,
  			name: nextProps.name,
  			email: nextProps.email,
  			phone: nextProps.phone

  		})
  		this.showPopup();
	},

	changeName: function(event) {
		this.setState({
			name: event.target.value //event.target fetches the DOM of the input tag
		})
	},

	changePhone: function(event) {
		this.setState({
			phone: event.target.value
		})
	},

	changeEmail: function(event) {
		this.setState({
			email: event.target.value
		})
	},

	render: function() {
		return(
			<div className="avgrund-popup" id="edit-contact">
				<div className="col-xs-12 main-container">
				    <div>
				        <h2 className="page-header text-center">Edit Contact</h2>
				        <div role="form" className="form-horizontal contract-form">
				            <div className="form-group">
				                <label className="col-sm-4 control-label">Full name:</label>
				                <div className="col-sm-6">
				                    <input type="text" className="form-control contact-name-input" id="fullNameEdit" value	={this.state.name} onChange = {this.changeName}/>
				                </div>
				            </div>
				            <div className="form-group">
				                <label className="col-sm-4 control-label">Email address:</label>
				                <div className="col-sm-6">
				                    <input type="email" className="form-control contact-email-input" id="emailEdit" value={this.state.email} onChange = {this.changeEmail}/>
				                </div>
				            </div>
				            <div className="form-group">
				                <label className="col-sm-4 control-label">Telephone number:</label>
				                <div className="col-sm-6">
				                    <input type="tel" className="form-control contact-tel-input" id="phoneEdit" value={this.state.phone} onChange = {this.changePhone}/>
				                </div>
				            </div>
				            <div className="form-group">
				                <div className="col-sm-offset-4 col-sm-3">
				                    <button type="submit" className="btn btn-outline btn-lg btn-block" onClick = {this.editContactInfo}>
				                    	Submit
				                    </button>
				                </div>
				                <div className="col-sm-3">
				                    <button type="submit" className="btn btn-outline btn-lg btn-block" onClick = {this.closePopup}>
				                    	Cancel
				                    </button>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		);
	}
});

window.EditContact = EditContact;