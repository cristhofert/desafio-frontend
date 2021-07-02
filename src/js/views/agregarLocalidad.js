import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AgregarLocalidad = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [nombre, setNombre] = useState("");
	const [error, setError] = useState(false);
	const [correcto, setCorrecto] = useState(false);
	const [nombreMensaje, setNombreMensaje] = useState("");
	const agregarLocalidadSubmit = async () => {
		const ok = await actions.agregarNuevaLocalidad(params.id, nombre);
		if (!ok) {
			setError(true);
			setCorrecto(false);
		} else {
			setError(false);
			setCorrecto(true);
			setNombreMensaje(nombre);
			setNombre("");
		}
	};
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6 shadow" id="fondoLogin">
					<h1 className="mt-3 text-center">Nueva Localidad</h1>
					{correcto ? (
						<div className="my-3 alert alert-success" role="alert">
							{`${nombreMensaje} agregado correctamente como Localidad`}
						</div>
					) : (
						""
					)}
					{error ? (
						<div className="my-3 alert alert-danger" role="alert">
							La localidad ya existe!
						</div>
					) : (
						""
					)}
					<div className="d-flex justify-content-center">
						<form
							onSubmit={e => {
								e.preventDefault();
								agregarLocalidadSubmit();
							}}
							className="w-75">
							<div className="mb-3 mt-3">
								<input
									onChange={e => {
										setNombre(e.target.value);
									}}
									type="text"
									className="form-control inputGris"
									id="nombre"
									aria-describedby="Nombre"
									value={nombre}
								/>
							</div>

							<div className="justify-content-center d-flex">
								<button type="submit" className="btn boton mb-5">
									Agregar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
