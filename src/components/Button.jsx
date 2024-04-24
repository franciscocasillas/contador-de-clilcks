import "../stylesheets/Button.css";

function Button({ text, counterClick, manageClick }) {
	return (
		<button
			className={counterClick ? "click-button" : "restart-button"}
			onClick={manageClick}
		>
			{text}
		</button>
	);
}

export default Button;
