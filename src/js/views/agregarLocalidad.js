import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AgregarLocalidad = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [nombre, setNombre] = useState("");
	const [error, setError] = useState(false);
	const [correcto, setCorrecto] = useState(false);
	const agregarLocalidadClick = async () => {
		const ok = await actions.agregarNuevaLocalidad(params.id, nombre);
		if (!ok) {
			setError(true);
		} else {
			setError(false);
			setCorrecto(true);
			setTimeout(() => {
				setCorrecto(false);
			}, 3000);
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
							Localidad agregado correctamente
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
						<form className="w-75">
							<div className="mb-3 mt-3">
								<input
									onChange={e => {
										setNombre(e.target.value);
									}}
									type="text"
									className="form-control"
									id="nombre"
									aria-describedby="Nombre"
									value={nombre}
								/>
							</div>

							<div className="justify-content-center d-flex">
								<button onClick={agregarLocalidadClick} type="button" className="btn btn-light mb-5">
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
