import React from "react";
import { Lista } from "../component/lista";

export const AdminEmpresas = () => (
	<div className="container">
		<div className="row">
			<div className="col-sm-12 col-md-9">
				<div className="py-2">
					<input
						type="text"
						placeholder="Buscar Empresa"
						className="inputGris form-control my-1"
						id="buscador"
					/>
				</div>
			</div>
			<div className="col-sm-12 col-md-3">
				<div className="py-2 d-flex justify-content-center align-items-center">
					<button type="button" className="btn boton py-2 my-1">
						Agregar Empresa
					</button>
				</div>
			</div>
		</div>

		<div className="row my-2">
			<div className="col-sm-12 col-md-3">
				<h2>Filtrar:</h2>
			</div>
			<div className="col-sm-12 col-md-3">
				<select id="Departamento" className="form-control my-1">
					<option>Departamento</option>
					<option>...</option>
				</select>
			</div>
			<div className="col-sm-12 col-md-3">
				<select id="Localidad" className="form-control my-1">
					<option>Localidad</option>
					<option>...</option>
				</select>
			</div>
			<div className="col-sm-12 col-md-3">
				<select id="Estado" className="form-control my-1">
					<option>Estado</option>
					<option>...</option>
				</select>
			</div>
		</div>
		<Lista tipo="empresas" />
	</div>
);
