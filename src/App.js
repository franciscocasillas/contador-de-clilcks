import "./App.css";
import Button from "./components/Button";
import alienScoutsLogo from "./images/aline-scouts.png";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
	const [numeroDeClicks, setNumeroDeClicks] = useState(0);

	const manageClick = () => {
		setNumeroDeClicks(numeroDeClicks + 1);
	};

	const restartCounter = () => {
		setNumeroDeClicks(0);
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
				<Contador numeroDeClicks={numeroDeClicks} />
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
