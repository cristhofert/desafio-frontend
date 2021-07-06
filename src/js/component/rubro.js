import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Rubro = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.cargarRubros();
	}, []);

	return (
		<>
			<div className={props.clases ? props.clases : ""}>
				{props.label ? <label htmlFor="rubro">Rubro</label> : ""}
				<select
					onChange={actions.setRubro}
					value={store.robro}
					id="rubros"
					className="form-control my-1"
					required>
					<option value="">Rubros</option>
					{store.rubros.map((rubro, index) => {
						return (
							<option key={index} value={rubro.nombre}>
								{rubro.nombre}
							</option>
						);
					})}
				</select>
			</div>
		</>
	);
};

Rubro.proptypes = {
	clases: PropTypes.string,
	label: PropTypes.bool
};

Rubro.defaultProps = {
	clases: "",
	label: true
};
