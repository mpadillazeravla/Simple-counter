import React from "react";

//include images into your bundle

import SecondsCounter from "./SecondsCounter.jsx";

// Aqui tenemos home , que recupera de secondscounter y manda los props a index.js

const Home = (props) => {
	return (
		<>
			<div className="container">
				<i className="fa-solid fa-clock"></i>
				<h1></h1>
				<SecondsCounter seconds={props.dmiles} />
				<SecondsCounter seconds={props.miles} />
				<SecondsCounter seconds={props.centenas} />
				<SecondsCounter seconds={props.decenas} />
				<SecondsCounter seconds={props.segundos} />
			</div>
			<div className="boton">
				<button
					type="button"
					className="btn btn-success"
					onClick={props.reseteo}>
					Reset
				</button>
			</div>
		</>
		// tenemos el boton para hacer reset , que manda los props a home
	);
};

export default Home;
