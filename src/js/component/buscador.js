import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Buscador = props => {
	const { store, actions } = useContext(Context);
	const [buscador, setBuscador] = useState("");
	const buscar = palabra => {
		actions.buscar(palabra, props.tipo);
	};

	return (
		<div className="py-2">
			<input
				onChange={e => {
					setBuscador(e.target.value);
					buscar(e.target.value);
				}}
				value={buscador}
				type="text"
				placeholder={props.placeholderBuscador}
				className="inputGris form-control my-1"
				id="buscador"
			/>
		</div>
	);
};

Buscador.propTypes = {
	tipo: PropTypes.string,
	placeholderBuscador: PropTypes.string
};
