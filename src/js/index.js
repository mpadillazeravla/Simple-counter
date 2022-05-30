//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// la variable que tirará de toda la logica
let n = 0;

// la funcion reset que hará que al pulsar el boton se ponga n a 0 y empiece el contador de nuevo
function reset() {
	n = 0;
}

// funcion setinterval que está dentro del RENDER para que actualice cada segundo
// con la primera variable hacemos que la cifra más grande sea el redondeo de N entre 10.000 , para que cuando pase de 10.000 segundos, esa cifra ponga un 1
// con el Rseconds10000 (r es de resto) le decimos que ese resto, entre 1000, será la 4ª cifra.
// Es decir, si tenemos 18000segundos, al hacer ese resto, nos da 8000, que entre 1000, pone un 8 en cuarta cifra. Y así sucesivamente.
setInterval(function () {
	n++;
	let seconds10000 = Math.floor(n / 10000);
	let rseconds10000 = n % 10000;
	let seconds1000 = Math.floor(rseconds10000 / 1000);
	let rseconds1000 = n % 1000;
	let seconds100 = Math.floor(rseconds1000 / 100);
	let rseconds100 = n % 100;
	let seconds10 = Math.floor(rseconds100 / 10);
	let rseconds10 = n % 10;

	ReactDOM.render(
		<Home
			segundos={rseconds10}
			decenas={seconds10}
			centenas={seconds100}
			miles={seconds1000}
			dmiles={seconds10000}
			// el props del onclick del boton llama a la funcion RESET
			reseteo={reset}
		/>,
		document.querySelector("#app")
	);
}, 1000);
//render your react application
