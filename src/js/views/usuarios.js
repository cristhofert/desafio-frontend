import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { ListaDeItems } from "../component/listaDeItems";
import { Link } from "react-router-dom";
import { Buscador } from "../component/buscador";

export const Usuarios = () => {
	const { store, actions } = useContext(Context);
	const [alert, setAlert] = useState("");

	const cargarDatos = async () => {
		const ok = await actions.getUsuarios();
		if (!ok) {
			setAlert(err);
		}
		await actions.cargarBuscador("usuarios");
	};

	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="container">
			{alert != "" ? (
				<div className="alert alert-danger" role="alert">
					Ha ocurrido un error
				</div>
			) : (
				""
			)}
			<div className="row mt-3">
				<div className="col-12">
					<h1>Usuarios</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-9">
					<Buscador tipo={"usuarios"} placeholderBuscador={"Buscar Usuario"} />
				</div>
				<div className="col-sm-3 col-md-3">
					<div className="py-2 d-flex justify-content-center align-items-center">
						<Link type="button" className="btn boton py-2 my-1" to="/crearUsuario">
							Agregar Usuarios
						</Link>
					</div>
				</div>
			</div>
			<ListaDeItems
				tipo="usuarios"
				primerBoton="Editar"
				segundoBoton="eliminar"
				primerBotonTo="/usuarios/:username/editar"
				segundoBotonClick={(e, p) => {
					actions.eliminarUsuario(p.username);
				}}
			/>
		</div>
	);
};
