import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Item = props => {
	const { store, actions } = useContext(Context);
	const handleClick = id => {
		if (props.tipo == "localidades") {
			actions.borrarLocalidad(id);
		} else if (props.tipo == "departamentos") {
			actions.borrarDepartamento(id);
		}
	};
	return (
		<div className="itemLista my-2 p-3 shadow">
			<div className="row">
				<div className="col-sm-12 col-md-8">
					<div className="h-100 d-flex align-items-center">
						<h3 className="text-light m-0">{props.nombre}</h3>
					</div>
				</div>
				<div className="col-sm-12 col-md-4">
					<div className="d-flex flex-column flex-md-row justify-content-end">
						{props.primerBoton ? (
							<Link type="button" className="btn botonOutline m-1" to={props.primerBotonTo}>
								{props.primerBoton}
							</Link>
						) : (
							""
						)}
						{props.segundoBoton ? (
							<button type="button" className="btn botonOutline m-1">
								{props.segundoBoton}
							</button>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

Item.propTypes = {
	id: PropTypes.number,
	nombre: PropTypes.string,
	primerBoton: PropTypes.string,
	segundoBoton: PropTypes.string,
	primerBotonTo: PropTypes.string,
	tipo: PropTypes.string
};
