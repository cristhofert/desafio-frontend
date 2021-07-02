import React from "react";
import { Lista } from "../component/lista";
import { Link } from "react-router-dom";

export const Asociado = () => (
	<div className="container">
		<div className="row mt-3">
			<div className="col-12">
				<h1>Asociados</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-9">
				<div className="py-2">
					<input
						type="text"
						placeholder="Buscar Persona"
						className="inputGris form-control my-1"
						id="buscador"
					/>
				</div>
			</div>
			<div className="col-sm-3 col-md-3">
				<div className="py-2 d-flex justify-content-center align-items-center">
					<Link type="button" className="btn boton py-2 my-1" to="/asociados/agregar">
						Agregar Asociado
					</Link>
				</div>
			</div>
		</div>
		<Lista tipo="asociados" />
	</div>
);
