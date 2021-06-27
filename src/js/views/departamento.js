import React from "react";
import { Lista } from "../component/lista";
import { Link } from "react-router-dom";

export const Departamento = () => (
	<div className="container">
		<div className="row d-flex justify-content-center">
			<div className="col-sm-12 col-md-3 my-auto ">
				<Link type="button" className="btn boton py-2" to="/departamento/nuevo">
					Agregar Departamento
				</Link>
			</div>
		</div>
		<Lista tipo="departamentos" />
	</div>
);
