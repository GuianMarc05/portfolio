import './App.css';

function App() {
	return (
		<>
			<div className="flex items-center justify-between font-kodchasan">
				<div className="flex m-10">
					<h1 className="text-3xl text-white font-bold cursor-pointer">
						Cosmo
					</h1>
				</div>
				<div className="list-none flex">
					<ul className="flex text-2xl text-white cursor-pointer">
						<li className="mr-7">Home</li>
						<li className="mr-7">About Me</li>
						<li className="mr-7">Projects</li>
						<li className="mr-7">Contact Me</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
