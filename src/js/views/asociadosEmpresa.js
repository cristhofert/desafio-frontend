import React, { useEffect, useContext } from "react";
import { Lista } from "../component/lista";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AsociadosEmpresa = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getAsociados(params.id);
	}, []);

	return (
		<div className="container">
			<div className="row mt-3">
				<div className="col-md-8 col-sm-12">
					<h1>Asociados</h1>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="d-flex h-100 justify-content-center justify-content-md-end align-items-center">
						<Link to="/empresas/agregar-asociado">
							<button type="button" className="btn boton py-2 my-1">
								Agregar asociado
							</button>
						</Link>
					</div>
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
			<Lista tipo="asociados" />
		</div>
	);
};
