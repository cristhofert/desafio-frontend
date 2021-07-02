import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditarLocalidad = () => {
	const [nombre, setNombre] = useState("");
	const [nombreMensaje, setNombreMensaje] = useState("");
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	const [correcto, setCorrecto] = useState(false);
	const params = useParams();
	const obtenerLocalidad = async () => {
		let localidad = await actions.obtenerLocalidadPorID(params.id);
		if (!localidad) {
			await actions.obtenerLocalidadPorIDBackEnd(params.id);
			localidad = await actions.obtenerLocalidadPorID(params.id);
		}
		setNombre(localidad.nombre);
	};
	const editarLocalidad = async () => {
		let url = process.env.BACKEND_URL + `/localidad/${params.id}`;

		let body = { nombre: nombre };
		let bodyJSON = JSON.stringify(body);

		let options = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: bodyJSON
		};

		const res = await fetch(url, options);
		const ok = res.ok;

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
	useEffect(() => {
		obtenerLocalidad();
	}, []);
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6 shadow" id="fondoLogin">
					<h1 className="mt-3 text-center">Localidad</h1>
					{correcto ? (
						<div className="my-3 alert alert-success" role="alert">
							{`${nombreMensaje} editada correctamente`}
						</div>
					) : (
						""
					)}
					{error ? (
						<div className="my-3 alert alert-danger" role="alert">
							Por favor indique un nombre para la localidad
						</div>
					) : (
						""
					)}
					<div className="d-flex justify-content-center">
						<form
							onSubmit={e => {
								e.preventDefault();
								editarLocalidad();
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
									Guardar cambios
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
