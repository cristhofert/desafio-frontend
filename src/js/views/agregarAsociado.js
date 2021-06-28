import React from "react";
import { Lista } from "../component/lista";
import { Link } from "react-router-dom";

export const AgregarAsociado = () => (
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
		<Lista tipo="personas" />
	</div>
);
