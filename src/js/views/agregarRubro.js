import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const AgregarRubro = () => {
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	const [correcto, setCorrecto] = useState(false);
	const [nombre, setNombre] = useState("");
	const [nombreMensaje, setNombreMensaje] = useState("");
	const agregarNuevo = async () => {
		const res = await actions.agregarRubro(nombre);
		if (!res) {
			setError(true);
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
					<h1 className="mt-3 text-center">Rubro Nuevo</h1>
					{correcto ? (
						<div className="my-3 alert alert-success" role="alert">
							{`${nombreMensaje} agregado correctamente como Rubro`}
						</div>
					) : (
						""
					)}
					{error ? (
						<div className="my-3 alert alert-danger" role="alert">
							El rubro ya existe!
						</div>
					) : (
						""
					)}

					<div className="d-flex justify-content-center">
						<form className="w-75">
							<div className="mb-3 mt-3">
								<input
									type="text"
									className="form-control inputGris"
									id="nombre"
									value={nombre}
									onChange={e => setNombre(e.target.value)}
								/>
							</div>

							<div className="justify-content-center d-flex">
								<button type="button" className="btn boton mb-5" onClick={agregarNuevo}>
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
