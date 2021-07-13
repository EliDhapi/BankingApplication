function Home() {
	return(
		<Card 
			bgcolor="light"	
			txtcolor="dark"
			header="Banking done right! Behind Banka there is experience and substance."
			title="Banka is the future of bank accounts management. We employ cutting edge technology to improve all facets of your financial life. And we tell you everything!
			Our thoughts on banking are innovative. They’re in tune with the times and aimed at the trendy, the connected, the overbooked, the in-a- hurry and the wanderers who want a super secure and mobile service."
			body={
				<>
					<div className="text-center">	
						<img src="tra2.gif" className="img-fluid center" alt="Responsive image" width="50%"/><br/>
					</div>
					
					A simple mobile bank, attractive and super secure, where bankers are movers and shakers, serious in their heads and comfy in their sneakers.
					We are your financial partner! <br/><br/>
					Sign up with us and create a savings or current account! <a href="#/createaccount/" class="btnDeposit">Create Account</a>  <br/><br/><br/>

					Are you already a customer? Log in to your account! <a href="#/login" class="btnDeposit">Login</a>  <br/><br/>					
					At Banka we are real people living in the real world. Real people who also happen to be bankers who know how important it is to have a product that combines great prices with quality products. A product that is adapted to all ages and all lifestyles. <br/><br/>
			
			Click to make a deposit. <a href="#deposit" class="btnDeposit">Deposit</a>  <br/><br/>

					<div className="text-center">	
						<img src="pay7.gif" className="img-fluid center" alt="Responsive image" width="30%"/><br/>
					</div>
					
					Click to make a withdrawal. <a href="#withdraw" class="btnDeposit">Withdraw</a>  <br/><br/>

					Banka offers services that were designed because we dreamed of them, and because they fit with the new ways of managing money. <br/><br/>
					What we want is a new relationship between the bank and its users. A relationship that allows you to be autonomous. But since there are times you may need help or advice, we also offer the support of the Banka Team. A team of wonder-bankers, experts in mobile tools, always available, so you’re never alone dealing with a question/ an issue. <br/><br/>
					

				</>
			}
		/>
	);
}