import "../stylesheets/Contador.css";

function Contador(props) {
	return <div className="contador">{props.numeroDeClicks}</div>;
}

export default Contador;
