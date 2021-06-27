import React from "react";
import { Lista } from "../component/lista";
import { Link } from "react-router-dom";

export const Localidades = () => (
	<div className="container">
		<div className="row m-2">
			<form className="form-inline">
				<div className="form-row d-flex justify-content-between">
					<div className="form-group">
						<input type="text" className="form-control" id="nombre" placeholder="Nombre" />
					</div>
					<div className="form-group">
						<input type="submit" className="form-control boton" id="cambiar" />
					</div>
				</div>
			</form>
		</div>
		<div className="row d-flex justify-content-center">
			<div className="col-sm-12 col-md-3 my-auto ">
				<Link type="button" className="btn boton py-2" to="/departamento/nuevo">
					Agregar Localidad
				</Link>
			</div>
		</div>
		<Lista tipo="departamentos" />
	</div>
);
