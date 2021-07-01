import React, { useContext, useEffect, useState } from "react";
import { ListaDeItems } from "../component/listaDeItems";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Localidades = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const cargarDatos = async () => {
		await actions.obtenerLocalidades(params.id);
	};

	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-9">
					<div className="py-2">
						<input
							type="text"
							placeholder="Buscar Localidad"
							className="inputGris form-control my-1"
							id="buscador"
						/>
					</div>
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
