import "./App.css";
import alienScoutsLogo from "./images/aline-scouts.png";

function App() {
	return (
		<div className="App">
			<div className="alien-scouts-logo-container">
				<img
					className="alien-scouts-logo"
					src={alienScoutsLogo}
					alt="Alien Scouts Logo"
				/>
			</div>
		</div>
	);
}

export default App;
