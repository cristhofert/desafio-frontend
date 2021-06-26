import React from "react";
import { Lista } from "../component/lista";

export const AdminPersonas = () => (
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
					<button type="button" className="btn boton py-2 my-1">
						Agregar Persona
					</button>
				</div>
			</div>
		</div>
		<Lista tipo="personas" />
	</div>
);
