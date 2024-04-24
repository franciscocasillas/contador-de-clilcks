import "./App.css";
import Button from "./components/Button";
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
			<div className="mainContainer">
				<Button 
          text="Click" 
          className={true}
          manageClick={} />
				<Button 
          text='Restart'
          className={false}
          manageClick={} />
			</div>
		</div>
	);
}

export default App;
