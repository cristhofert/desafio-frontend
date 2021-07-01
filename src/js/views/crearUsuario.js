import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";

export const CrearUsuario = () => {
	return (
		<div className="container">
			<h1 className="text-center mt-2">Crear Usuario</h1>
			<div className="contenedor-form mx-auto p-4 my-2">
				<form>
					<div className="form-group">
						<label className="label-claro" htmlFor="Nombre">
							Nombre identificador
						</label>
						<input type="text" className="form-control inputGris" required />
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="E-mail">
							Email
						</label>
						<input type="text" className="form-control inputGris" required />
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="NombreUsuario">
							Nombre de usuario
						</label>
						<input type="text" className="form-control inputGris" required />
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="Celular">
							Contraseña
						</label>
						<input type="password" className="form-control inputGris" required />
					</div>
					<div className="w-100 d-flex justify-content-center">
						<button type="submit" className="btn botonOutline py-2 my-1 text-center">
							Aceptar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
