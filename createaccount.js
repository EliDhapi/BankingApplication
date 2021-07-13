function CreateAccount() {
	const [show, setShow]         = React.useState(true);
	const [disabled, setDisabled]           = React.useState(true);
	const [status, setStatus]     = React.useState('');
	const [name, setName]         = React.useState('');
	const [email, setEmail]       = React.useState('');
	const [password, setPassword] = React.useState(''); 
	const ctx = React.useContext(UserContext);
	
	//Determine if to set the button disabled or not
	if (!name && !password && !email) {
		//Check if button should be enabled
		if (disabled) {
			console.log(disabled);
			console.log(`button disabled ${disabled}`);
		} else {
			setDisabled(true);
			console.log(`button disabled ${disabled}`);
		}
	} else {
		if (disabled) {
			setDisabled(false);
			console.log(`button disabled ${disabled}`);
		} else {
			console.log(`button disabled ${disabled}`);
		}
	}
	
	function validate(field, label){
		if (!field) {
			setStatus('Error: ' + label);
			setTimeout(() => setStatus(''), 3000);
			return false;
		}
		return true;
	}
	
	function validatePassword(field, label){
		if (field.length < 8) {
			setStatus('Error: ' + label);
			setTimeout(() => setStatus(''), 3000);
			return false;
		}
		return true;
	}
	
	function handleCreate(){
		console.log(name,email,password);
		if (!validate(name,     'Please enter a name'))           return;
		if (!validate(email,    'Please enter an email'))         return;
		if (!validate(password, 'Please enter a valid password')) return;
		if (!validatePassword(password, 'Password must be at least 8 characters long')) return;
		ctx.users.push({name,email,password,balance:100, loggedin: false, submissions: []});
		setShow(false);
	}
	
	function clearForm(){
		setName('');
		setEmail('');
		setPassword('');
		setShow(true);
	}
	
	return (
		<Card
			bgcolor="light"	
			txtcolor="dark"
			header = "Create your account"
			status = {status}
			body = {show ? (
				<>
				<h5>Fill in the form below to create your account!</h5> <br/><br/>
				<div className="text-left">	
						<img src="tra5.gif" className="img-fluid left" alt="Responsive image" width="22%"/><br/><br/>
					</div>
				Name<br/>
				<input type="input" className="form-control" id="name" placeholder="Enter Name" required value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
				Email<br/>
				<input type="input" className="form-control" id="email" placeholder="Enter Email" required value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
				Password<br/>
				<input type="password" className="form-control" id="password" placeholder="Enter Password" minlength="8" required value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
				{disabled ? (
					<>
					<button type="submit" className="btn btn-primary" disabled="disabled" onClick={handleCreate}>Create Account</button><br/><br/>
					</>
				):(
					<>
					<button type="submit" className="btn btn-primary" onClick={handleCreate}>Create Account</button><br/><br/>
					</>
				)}
				<button type="submit" className="btn btn-secondary" onClick={clearForm}>Clear Current Form</button><br/><br/>
				Already have an account? <a href='#/login/' data-toggle="tooltip" title="Login to your account">Login Here</a><br/><br/>
				</>
			):(
				<>
				<div className="text-left">	
						<img src="suc1.gif" className="img-fluid left" alt="Responsive image" width="15%"/><br/><br/>
					</div>
				<h5>Success! You can now log in with your new account!</h5> <a className="btn btn-primary" href='#/login/' data-toggle="tooltip" title="Login to your account">Login</a><br/><br/>
				Would you like to create another account? <button type="submit" className="btn btn-primary" onClick={clearForm}>Create Another Account</button>
				</>
			)}
		/>
	)
}