import "./App.css";
import Button from "./components/Button";
import alienScoutsLogo from "./images/aline-scouts.png";

function App() {
	const manageClick = () => {
		console.log("click");
	};

	const restartCounter = () => {
		console.log("restart");
	};

	return (
		<div className="App">
			<div className="alien-scouts-logo-container">
				<img
					className="alien-scouts-logo"
					src={alienScoutsLogo}
					alt="Alien Scouts Logo"
				/>
			</div>
			<div className="mainContainer">
				<Button text="Click" counterClick={true} manageClick={manageClick} />
				<Button
					text="Restart"
					counterClick={false}
					manageClick={restartCounter}
				/>
			</div>
		</div>
	);
}

export default App;
