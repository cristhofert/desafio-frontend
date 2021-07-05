import React, { useContext, useEffect } from "react";
import { Lista } from "../component/lista";
import { Context } from "../store/appContext";
import { Buscador } from "../component/buscador";

export const AgregarAsociado = () => {
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
			<div className="row mt-3">
				<div className="col-12">
					<h1>Asociados</h1>
				</div>
				<div className="col-12">
					<Buscador tipo={"personas"} placeholderBuscador={"Buscar Persona"} />
				</div>
			</div>
			<Lista tipo="agregarAsociados" />
		</div>
	);
};
