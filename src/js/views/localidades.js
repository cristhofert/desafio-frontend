import React, { useContext, useEffect, useState } from "react";
import { ListaDeItems } from "../component/listaDeItems";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscador } from "../component/buscador";

export const Localidades = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const cargarDatos = async () => {
		await actions.obtenerLocalidades(params.id);
		await actions.cargarBuscador("localidades");
	};

	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-9">
					<Buscador tipo={"localidades"} placeholderBuscador={"Buscar Localidad"} />
				</div>
				<div className="col-sm-12 col-md-3">
					<div className="py-2 d-flex justify-content-center align-items-center">
						<Link to={`/departamentos/${params.id}/localidades/nuevo`}>
							<button type="button" className="btn boton py-2 my-1">
								Agregar Localidad
							</button>
						</Link>
					</div>
				</div>
			</div>
			<ListaDeItems
				tipo="localidades"
				primerBoton="Editar"
				primerBotonTo="/localidades/:id/"
				segundoBoton="Eliminar"
			/>
		</div>
	);
};
