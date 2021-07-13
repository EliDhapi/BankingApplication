function NavBar(){
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
				<div className="container-fluid">
					<a className="navbar-brand" href="#" data-toggle="tooltip" id="logo"><i class="fas fa-coins" title="Home page"></i>Banka Home</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-5 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href='#/createaccount/' data-toggle="tooltip" title="Create your account">Create Account</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href='#/login/' data-toggle="tooltip" title="Login to your account">Login</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href='#/deposit/' data-toggle="tooltip" title="Deposit funds">Deposit</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href='#/withdraw/' data-toggle="tooltip" title="Withdraw funds">Withdraw</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href='#/alldata/' data-toggle="tooltip" title="See your data">All Data</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}