
var Contact = React.createClass( {
	removeContact: function() {
		this.props.deleteContactFromServer(this.props.contactId);
	},
	editContactInfo: function(){
		ReactDOM.render(<EditContact 
							name = {this.props.name}
							phone = {this.props.phone}
							email = {this.props.email}
							contactId = {this.props.contactId}
							editContactFromServer = {this.props.editContactFromServer}/>, document.getElementById("modal-container"));
	},

	render: function() {
		return(
			    <li className="media col-md-6 col-lg-4" id={this.props.contactId}>
			        <div className="thumbnail">
			            <img className="media-object" src={this.props.img} />
			        </div>
			        <div className="media-heading">
			            <h3>
				          {this.props.name}
				          <small>
				            <a href="#">
				            	<span className="glyphicon glyphicon-pencil" onClick = {this.editContactInfo}>
				            	</span>
				            </a>
				            <a href="#" className="delete-contract">
				              <span className="glyphicon glyphicon-trash" onClick = {this.removeContact}></span>
				            </a>
				          </small>
				        </h3>
			        </div>
			        <div className="media-body">
			            <dl>
			                <dt>Phone Number:</dt>
			                <dd>{this.props.phone}</dd>
			                <dt>Email:</dt>
			                <dd>{this.props.email}</dd>
			            </dl>
			        </div>
			        <hr />
			    </li>
			    );
	}
});

window.Contact = Contact;