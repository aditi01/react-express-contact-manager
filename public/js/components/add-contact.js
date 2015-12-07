
var AddContact = React.createClass({
	closePopup: function() {
		Avgrund.hide();
	},
	submitContact: function() {
		console.log("submitting");
		var fullNameInput = document.getElementById("fullNameInput");
		var emailInput = document.getElementById("emailInput");
		var phoneInput = document.getElementById("phoneInput");

		var that = this;

		if(fullNameInput.value !== "" && emailInput.value !== "" && phoneInput !== ""){
			var contactInfo = {
				contactName: fullNameInput.value,
				contactEmail: emailInput.value,
				contactPhone: phoneInput.value,
				contactImg: '/img/faces/11.jpg'
			}
			$.ajax({
				url: '/contact/add',
				type: 'POST',
				dataType: 'json',
				data: contactInfo,
				success: function(data) {
					if(data.message === 'success') {
						that.props.fetchContactsFromServer();
					}
				},
				error: function(err){
					console.log(err);
				}
			});
		}
		Avgrund.hide();

	},

	render: function() {
		return(
			<div className="avgrund-popup" id="add-contact">
				<div className="col-xs-12 main-container">
				    <div>
				        <h2 className="page-header text-center">Create Contact</h2>
				        <div role="form" className="form-horizontal contract-form">
				            <div className="form-group">
				                <label className="col-sm-4 control-label">Full name:</label>
				                <div className="col-sm-6">
				                    <input type="text" className="form-control contact-name-input" id="fullNameInput" />
				                </div>
				            </div>
				            <div className="form-group">
				                <label className="col-sm-4 control-label">Email address:</label>
				                <div className="col-sm-6">
				                    <input type="email" className="form-control contact-email-input" id="emailInput" />
				                </div>
				            </div>
				            <div className="form-group">
				                <label className="col-sm-4 control-label">Telephone number:</label>
				                <div className="col-sm-6">
				                    <input type="tel" className="form-control contact-tel-input" id="phoneInput" />
				                </div>
				            </div>
				            <div className="form-group">
				                <div className="col-sm-offset-4 col-sm-3">
				                    <button type="submit" className="btn btn-outline btn-lg btn-block" onClick = {this.submitContact}>
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

window.AddContact = AddContact;