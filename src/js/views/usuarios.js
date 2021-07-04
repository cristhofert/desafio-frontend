import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { ListaDeItems } from "../component/listaDeItems";
import { Link } from "react-router-dom";

export const Usuarios = () => {
	const { store, actions } = useContext(Context);
	const [alert, setAlert] = useState("");

	useEffect(() => {
		actions
			.getUsuarios()
			.then(ok => console.log(ok))
			.catch(err => setAlert(err));
	}, []);

	return (
		<div className="container">
			{alert != "" ? (
				<div className="alert alert-danger" role="alert">
					{alert}
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
					<div className="py-2">
						<input
							type="text"
							placeholder="Buscar Persona"
							className="inputGris form-control my-1"
							id="buscador"
						/>
					</div>
				</div>
				<div className="col-sm-3 col-md-3">
					<div className="py-2 d-flex justify-content-center align-items-center">
						<Link type="button" className="btn boton py-2 my-1" to="/crearUsuario">
							Agregar Usuarios
						</Link>
					</div>
				</div>
			</div>
			<ListaDeItems tipo="usuarios" primerBoton="Editar" segundoBoton="eliminar" />
		</div>
	);
};
