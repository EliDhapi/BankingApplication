function AllData() {
	
	// Adding in the user context
	const ctx = React.useContext(UserContext)
	
	// Define empty array of user cards
	var userCards = [];
	
	// Going through each user and appending a card of their data
	for (const {name, email, password, balance, loggedin, submissions} of ctx.users) {
		
		// Getting all user transactions and making it a list
		var listHtml = [];
		for (const item of submissions){
			listHtml.push(
				<li>{item}</li>
			);
		}
		
		userCards.push(
			<>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">
						<strong>Email:</strong> {email}<br/>
						<strong>Password:</strong> {password}<br/>
							<strong>Balance:</strong> ${balance.toFixed(2)}<br/>
							<strong>Transactions:</strong><br/> 
							{listHtml}
						</p>
					</div>
				</div><br/>
			</>
		);
	};
	
	//Boilerplate Text if no users have been created yet
	if (!userCards) {
		userCards = 
			<>
			No users have been created yet. <br/>
			<a href="#/createaccount/" data-toggle="tooltip" title="Create a new account">Click here to make a new account</a> <br/>
			</>
	}
	
	// Returning the cards of all user data
	return(<Card bgcolor="light" txtcolor="dark" header="All User Data" body={userCards}/>);
}