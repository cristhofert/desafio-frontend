import React, { useContext, useEffect } from "react";
import { Lista } from "../component/lista";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscador } from "../component/buscador";

export const AdminPersonas = () => {
	const { store, actions } = useContext(Context);

	const cargarDatos = async () => {
		await actions.cargarPersonas();
		await actions.cargarBuscador("personas");
	};
	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-9">
					<Buscador tipo={"personas"} placeholderBuscador={"Buscar Persona"} />
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
