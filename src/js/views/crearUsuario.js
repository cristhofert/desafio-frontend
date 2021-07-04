import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";

export const CrearUsuario = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const nombre = useRef(null);
	const email = useRef(null);
	const usuario = useRef(null);
	const contrasenna = useRef(null);
	const esAdmin = useRef(null);

	return (
		<div className="container">
			<h1 className="text-center mt-2">Crear Usuario</h1>
			<div className="contenedor-form mx-auto p-4 my-2">
				<form
					onSubmit={e => {
						e.preventDefault();
						actions
							.crearUsuario({
								nombre: nombre.current.value,
								usuario: usuario.current.value,
								email: email.current.value,
								contrasenna: contrasenna.current.value,
								esAdmin: esAdmin.current.value
							})
							.then(() => history.push("/usuarios"));
					}}>
					<div className="form-group">
						<label className="label-claro" htmlFor="Nombre">
							Nombre
						</label>
						<input ref={nombre} type="text" className="form-control inputGris" required />
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="E-mail">
							Email
						</label>
						<input ref={email} type="text" className="form-control inputGris" required />
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="NombreUsuario">
							Nombre de usuario
						</label>
						<input ref={usuario} type="text" className="form-control inputGris" required />
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="Celular">
							Contraseña
						</label>
						<input ref={contrasenna} type="password" className="form-control inputGris" required />
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="Celular">
							Es administrador
						</label>
						<select ref={esAdmin} className="form-control inputGris" required>
							<option value="true">Si</option>
							<option value="false" selected>
								No
							</option>
						</select>
					</div>
					<div className="w-100 d-flex justify-content-center">
						<input type="submit" className="btn botonOutline py-2 my-1 text-center" />
					</div>
				</form>
			</div>
		</div>
	);
};
