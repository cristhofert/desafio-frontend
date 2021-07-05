import React, { useEffect, useContext } from "react";
import { Lista } from "../component/lista";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { DepartamentoYLocalidad } from "../component/departamentoYLocalidad";
import { Buscador } from "../component/buscador";

export const AdminEmpresas = () => {
	const { store, actions } = useContext(Context);

	const cargarDatos = async () => {
		await actions.getEmpresas();
		await actions.cargarBuscador("empresas");
	};
	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="container">
			<div>
				<ul className="menu p-0 my-auto">
					<li>
						<a href="#">
							<i className="fa fa-bars mr-2" />
							Reportes
						</a>
						<ul className="submenu">
							<li>
								<a href="#">Cantidad total de empresas activas</a>
							</li>
							<li>
								<a href="#">Cantidad total de empresas por rubro de actividad</a>
							</li>
							<li>
								<a href="#">Listado de empresas por rubro de actividad</a>
							</li>
							<li>
								<a href="#">Cantidad total de empresas por localidad</a>
							</li>
							<li>
								<a href="#">Altas y bajas del mes</a>
							</li>
							<li>
								<a href="#">Aniversario de empresas por mes</a>
							</li>
							<li>
								<a href="#">Listado de emprendedores por rubro de actividad</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-9">
					<Buscador tipo={"empresas"} placeholderBuscador={"Buscar Empresa"} />
				</div>
				<div className="col-sm-12 col-md-3">
					<div className="py-2 d-flex justify-content-center align-items-center">
						<Link to="/empresas/crear">
							<button type="button" className="btn boton py-2 my-1">
								Agregar Empresa
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="row my-2">
				<div className="col-12">
					<h2>Filtrar:</h2>
				</div>
				<DepartamentoYLocalidad clases={"col-sm-12 col-md-3"} />
				<div className="col-sm-12 col-md-3">
					<select id="Estado" className="form-control my-1">
						<option>Estado</option>
						<option>...</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-3">
					<select id="Rubro" className="form-control my-1">
						<option>Rubro</option>
						<option>...</option>
					</select>
				</div>
			</div>
			<Lista tipo="empresas" />
		</div>
	);
};
