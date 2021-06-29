import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const CrearPersona = () => {
	const { store, actions } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [celular, setCelular] = useState("");
	const [estado, setEstado] = useState("activo");

	const crearPersona = async () => {
		let url = process.env.BACKEND_URL;

		let body = {
			nombre: nombre,
			apellido: apellido,
			email: email,
			celular: celular,
			estado: estado
		};

		let bodyJSON = JSON.stringify(body);

		let options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: bodyJSON
		};

		const res = await fetch(url, options);
		const data = await res.json();
		store.personas.push(data);
		setNombre("");
		setApellido("");
		setEmail("");
		setCelular("");
		setEstado("");
	};

	return (
		<div className="container">
			<h1 className="text-center mt-2">Crear Persona</h1>

			<div className="contenedor-form mx-auto p-4 my-2">
				<form>
					<div className="form-group">
						<label className="label-claro" htmlFor="Nombre">
							Nombre
						</label>
						<input
							onChange={e => setNombre(e.target.value)}
							value={nombre}
							type="text"
							className="form-control inputGris"
							id="Nombre"
						/>
					</div>
					<div className="form-group">
						<label className="label-claro" htmlFor="Apellido">
							Apellido
						</label>
						<input
							onChange={e => setApellido(e.target.value)}
							value={apellido}
							type="text"
							className="form-control inputGris"
							id="Apellido"
						/>
					</div>

					<div className="form-group">
						<label className="label-claro" htmlFor="E-mail">
							E-mail
						</label>
						<input
							onChange={e => setEmail(e.target.value)}
							value={email}
							type="text"
							className="form-control inputGris"
							id="E-mail"
						/>
					</div>

					<div className="form-group">
						<label className="label-claro" htmlFor="Celular">
							Celular
						</label>
						<input
							onChange={e => setCelular(e.target.value)}
							value={celular}
							type="text"
							className="form-control inputGris"
							id="Celular"
						/>
					</div>

					<div className="form-group">
						<label className="label-claro" htmlFor="Estado">
							Estado
						</label>
						<select
							onChange={e => setEstado(e.target.value)}
							value={estado}
							className="form-control"
							id="Estado">
							<option>Activo</option>
							<option>Inactivo</option>
						</select>
					</div>
					<div className="w-100 d-flex justify-content-center">
						<button
							onClick={e => {
								e.preventDefault();
								crearPersona();
							}}
							type="submit"
							className="btn botonOutline py-2 my-1 text-center">
							Guardar Persona
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
