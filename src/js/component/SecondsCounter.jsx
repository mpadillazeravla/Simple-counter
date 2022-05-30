import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<>
			<div>
				<span>{props.seconds}</span>
			</div>
		</>
	);
};

export default SecondsCounter;

// este es el componente secondcounter que será la base del home y pasará props a home
