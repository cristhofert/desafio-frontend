import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "bootstrap";

export const EditarUsuario = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const params = useParams();
	const [alert, setAlert] = useState("");

	useEffect(() => {
		actions.getUsuario(params.username);
	}, []);

	const editar = () => {
		if (store.usuarioEditar.is_admin == "true") actions.setIsAdmin(true);
		else actions.setIsAdmin(false);

		actions
			.actualizarUsuario()
			.then(() => history.push("/usuarios"))
			.catch(err => setAlert(err));

		console.log(store.usuarioEditar);
	};

	return (
		<div className="container">
			{alert != "" ? (
				<div className="alert alert-danger" role="alert">
					{alert}
				</div>
			) : (
				""
			)}
			<h1 className="text-center mt-2">Editar Usuario</h1>
			<div className="contenedor-form mx-auto p-4 my-2">
				<form>
					<div className="form-group">
						<label className="label-claro" htmlFor="name">
							Nombre
						</label>
						<input
							id="name"
							type="text"
							className="form-control inputGris"
							required
							onChange={actions.setUsuario}
							value={store.usuarioEditar.name}
						/>
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="email">
							Email
						</label>
						<input
							id="email"
							type="text"
							className="form-control inputGris"
							onChange={actions.setUsuario}
							value={store.usuarioEditar.email}
							required
						/>
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="username">
							Nombre de usuario
						</label>
						<input
							id="username"
							type="text"
							className="form-control inputGris"
							onChange={actions.setUsuario}
							value={store.usuarioEditar.username}
							required
						/>
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="password">
							Contraseña
						</label>
						<input
							id="password"
							type="password"
							className="form-control inputGris"
							onChange={actions.setUsuario}
							value={store.usuarioEditar.password}
							required
						/>
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="is_admin">
							Es administrador
						</label>
						<select
							id="is_admin"
							className="form-control inputGris"
							onChange={actions.setUsuario}
							value={store.usuarioEditar.is_admin}
							required>
							<option value="true">Si</option>
							<option value="false">No</option>
						</select>
					</div>
				</form>
				<div className="w-100 d-flex justify-content-center">
					<button className="btn botonOutline py-2 my-1 text-center" onClick={editar}>
						Editar
					</button>
				</div>
			</div>
		</div>
	);
};
