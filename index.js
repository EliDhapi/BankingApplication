function Spa(){
	return(
		<HashRouter>
			<NavBar/>
			<UserContext.Provider value={
				{users:[
					{
						name:'Alexander the Great',
						email:'alex@gmail.com',
						password:'alex_great21',
						balance:8906,
						submissions: ['Deposited $8903 on 27/06/2021','Withdrew $250 on 28/06/2021']
					},
					{
						name:'Eli la Reine',
						email:'eli@yahoo.com',
						password:'eli-reine345',
						balance:9500,
						submissions: ['Deposited $5901 on 22/06/2021','Withdrew $48 on 24/06/2021']
					},
					{
						name:'Andrea il Magnifico',
						email:'andre@hotmail.com',
						password:'andre_thepower48',
						balance:9990,
						submissions: ['Deposited $7695 on 11/06/2021','Withdrew $26 on 14/06/2021']
					},
					{
						name:'Diana Futuro',
						email:'diana@gmail.com',
						password:'diana-future23',
						balance:3580,
						submissions: ['Deposited $1250 on 28/06/2021','Withdrew $32 on 28/06/2021']
					}
				]}}>
				<Route path="/" exact component={Home} />
				<Route path="/createaccount/" exact component={CreateAccount} />
				<Route path="/login/" exact component={Login} />
				<Route path="/deposit/" exact component={Deposit} />
				<Route path="/withdraw/" exact component={Withdraw} />
				<Route path="/alldata/" exact component={AllData} />
			</UserContext.Provider>
		</HashRouter>
	);
}

ReactDOM.render(
	<Spa/>,
	document.getElementById('root')
)