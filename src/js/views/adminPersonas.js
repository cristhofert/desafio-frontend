import React, { useContext, useEffect } from "react";
import { Lista } from "../component/lista";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AdminPersonas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.cargarPersonas();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-9">
					<div className="py-2">
						<input
							type="text"
							placeholder="Buscar Persona"
							className="inputGris form-control my-1"
							id="buscador"
						/>
					</div>
				</div>
				<div className="col-sm-12 col-md-3">
					<div className="py-2 d-flex justify-content-center align-items-center">
						<Link to="/personas/crear">
							<button type="button" className="btn boton py-2 my-1">
								Agregar Persona
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Lista tipo="personas" />
		</div>
	);
};
