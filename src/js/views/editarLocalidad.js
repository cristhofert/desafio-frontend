import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EditarLocalidad = () => {
	const [nombre, setNombre] = useState("");
	const params = useParams();
	const obtenerLocalidad = async () => {
		let url = process.env.BACKEND_URL + `/localidad/${params.id}`;
		let options = { method: "GET" };

		const res = await fetch(url, options);
		const data = await res.json();
		setNombre(data.nombre);
	};
	const editarLocalidad = async () => {
		let url = process.env.BACKEND_URL + `/localidad/${params.id}`

		let body = { nombre: nombre };
		let bodyJSON = JSON.stringify(body);

		let options = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: bodyJSON
		};

		const res = await fetch(url, options);
		
	};
	useEffect(() => {
		obtenerLocalidad();
	}, []);
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6 shadow" id="fondoLogin">
					<h1 className="mt-3 text-center">Localidad</h1>
					<div className="d-flex justify-content-center">
						<form className="w-75">
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
								<button onClick={()=>{editarLocalidad}} type="button" className="btn boton mb-5">
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
