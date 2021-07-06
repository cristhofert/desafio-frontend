import React, { useEffect, useContext, useState } from "react";
import { Lista } from "../component/lista";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { DepartamentoYLocalidad } from "../component/departamentoYLocalidad";
import { Buscador } from "../component/buscador";
import { Rubro } from "../component/rubro";

export const AdminEmpresas = () => {
	const { store, actions } = useContext(Context);
	const [estado, setEstado] = useState("");

	const cargarDatos = async () => {
		await actions.getEmpresas();
		console.log("ñ", store.departamentoYLocalidad.localidad);
		const localidad = store.departamentoYLocalidad.localidad ? store.departamentoYLocalidad.localidad.nombre : "";
		console.log("locali: ", localidad);
		actions.cargarBuscador("empresas", {
			estado,
			localidad,
			actividad_principal: store.robro,
			actividad_secunadria: store.robro
		});
	};

	useEffect(
		() => {
			cargarDatos();
		},
		[estado, store.departamentoYLocalidad.localidad, store.robro]
	);

	return (
		<div className="container">
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
					<select
						id="Estado"
						className="form-control my-1"
						value={estado}
						onChange={e => {
							if (e.target.value === "true") setEstado(true);
							else if (e.target.value === "false") setEstado(false);
							else setEstado("");
						}}>
						<option value="">Estado</option>
						<option value="true">Activa</option>
						<option value="false">Desactivada</option>
					</select>
				</div>
				<Rubro clases="col-sm-12 col-md-3" label={false} />
			</div>
			<Lista tipo="empresas" />
		</div>
	);
};
