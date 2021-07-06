import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PerfilEmpresa = () => {
	const { store, actions } = useContext(Context);

	const cargarDatos = async () => {
		await actions.getMiEmpresa();
	};

	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<div className="d-flex flex-column justify-content-center align-items-center">
						<img
							className="fotoPerfil mb-2"
							src="https://www.logolynx.com/images/logolynx/e5/e5ba79334133d2cb362dd639f755a392.png"
							alt="logo empresa"
						/>
					</div>
				</div>
				<div className="col-8 d-flex">
					<div className="col-md-9">
						<h1>{store.empresa.nombre_fantasia}</h1>
						<h3>{store.empresa.razon_social}</h3>
					</div>
					<div className="col-md-3">
						<div className="h-100 d-flex align-items-end">
							<Link type="button" className="btn boton mb-1" to="/perfilEmpresa/editar">
								Editar perfil
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5 mb-5">
				<div className="col-sm-12 col-md-6">
					<div>
						<h4>Email</h4>
						<p>{store.empresa.email}</p>
					</div>
					<div>
						<h4>Número de RUT</h4>
						<p>{store.empresa.RUT}</p>
					</div>
					<div>
						<h4>Número de BPS</h4>
						<p>{store.empresa.nro_BPS}</p>
					</div>
					<div>
						<h4>Número de referencia</h4>
						<p>{store.empresa.nro_referencia}</p>
					</div>
					<div>
						<h4>Fecha de afiliación</h4>
						<p>{store.empresa.fecha_afiliacion}</p>
					</div>
					<div>
						<h4>Fecha de Inicio Empresa</h4>
						<p>{store.empresa.fecha_inicio_empresa}</p>
					</div>
					<div>
						<h4>Fecha de Baja</h4>
						<p>{store.empresa.fecha_de_baja}</p>
					</div>
					<div>
						<h4>Observaciones</h4>
						<p>{store.empresa.observaciones}</p>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 div-derecha">
					<div className="pl-3">
						<div>
							<h4>Celular</h4>
							<p>{store.empresa.observaciones}</p>
						</div>
						<div>
							<h4>Teléfono</h4>
							<p>{store.empresa.telefono}</p>
						</div>
						<div>
							<h4>Rubro de actividad principal</h4>
							<p>{store.empresa.actividad_principal ? store.empresa.actividad_principal.nombre : ""}</p>
						</div>
						<div>
							<h4>Rubro de actividad secundaria</h4>
							<p>{store.empresa.actividad_secundaria ? store.empresa.actividad_secundaria.nombre : ""}</p>
						</div>
						<div>
							<h4>Estado</h4>
							<p>{store.empresa.estado ? "Activo" : "Inactivo"}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
