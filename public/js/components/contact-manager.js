

var ContactManager = React.createClass({
	showPopup: function() {
		Avgrund.show( "#add-contact" );
	},

	render: function() {
		return(
			<div>
			    <header className="bs-header">
			        <div className="container">
			            <h1>Contact Manager</h1>
			            <p>Simple React.js example application</p>
			        </div>
			    </header>
			    
			    <div className="container">
			        <div className="row">
			            <div className="col-xs-12 main-container">
			                <div>
			                    <h2 className="page-header text-center">List of contacts</h2>
			                    <p className="text-center">
			                        <button type="button" className="btn btn-lg btn-outline" onClick = {this.showPopup}>
			                        	Add Contact
			                        </button>
			                    </p>

			                    <ContactList />

			                </div>
			            </div>
			        </div>
			    </div>
			</div>

		)
	}
});
//due to issue: http://stackoverflow.com/questions/33109430/script-tag-text-babel-variable-scope
window.ContactManager = ContactManager;