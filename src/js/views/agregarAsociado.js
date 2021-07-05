import React, { useContext, useEffect } from "react";
import { Lista } from "../component/lista";
import { Context } from "../store/appContext";

export const AgregarAsociado = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.cargarPersonas();
	}, []);

	return (
		<div className="container">
			<div className="row mt-3">
				<div className="col-12">
					<h1>Asociados</h1>
				</div>
				<div className="col-12">
					<div className="py-2">
						<input
							type="text"
							placeholder="Buscar Persona"
							className="inputGris form-control my-1"
							id="buscador"
						/>
					</div>
				</div>
			</div>
			<Lista tipo="agregarAsociados" />
		</div>
	);
};
