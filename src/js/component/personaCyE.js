import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";

export const PersonaCyE = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [emailActual, setEmailActual] = useState("");
	const [emailNuevo, setEmailNuevo] = useState("");
	const [celular, setCelular] = useState("");
	const [estado, setEstado] = useState("activo");
	const revisarForm = () => {
		return nombre.length != 0 && apellido.length != 0 && emailNuevo.length != 0 && celular.length != 0;
	};

	const cargarDatosPersona = async () => {
		const persona = await actions.obtenerPersonaPorID(params.id);
		setNombre(persona.nombre);
		setApellido(persona.apellido);
		setEmailActual(persona.email);
		setEmailNuevo(persona.email);
		setCelular(persona.celular);
		setEstado(persona.estado);
	};

	useEffect(() => {
		if (props.accion == "editar") {
			cargarDatosPersona();
		}
	}, []);
	const handleSubmit = async () => {
		if (revisarForm()) {
			if (props.accion == "crear") {
				let url = process.env.BACKEND_URL + "/persona";
				let body = {
					nombre: nombre,
					apellido: apellido,
					email: emailNuevo,
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
				setEmailActual("");
				setEmailNuevo("");
				setCelular("");
				setEstado("");
			} else if (props.accion == "editar") {
				let url = process.env.BACKEND_URL + "/persona";
				let body = {
					nombre: nombre,
					apellido: apellido,
					emailActual: emailActual,
					emailNuevo: emailNuevo,
					celular: celular,
					estado: estado
				};
				let bodyHTML = JSON.stringify(body);
				let options = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: bodyHTML
				};

				const res = await fetch(url, options);
				const data = await res.json();
				store.personas = await store.personas.filter(persona => {
					return persona.id != params.id;
				});
				store.personas.push(data);
				setNombre("");
				setApellido("");
				setEmailActual("");
				setEmailNuevo("");
				setCelular("");
				setEstado("");
				history.push("/personas");
			}
		}
	};

	return (
		<div className="container">
			<h1 className="text-center mt-2">Crear Persona</h1>

			<div className="contenedor-form mx-auto p-4 my-2">
				<form className="needs-validation" noValidate>
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
							required
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
							required
						/>
					</div>

					<div className="form-group">
						<label className="label-claro" htmlFor="E-mail">
							E-mail
						</label>
						<input
							onChange={e => setEmailNuevo(e.target.value)}
							value={emailNuevo}
							type="text"
							className="form-control inputGris"
							id="E-mail"
							required
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
							required
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
							id="Estado"
							required>
							<option>Activo</option>
							<option>Inactivo</option>
						</select>
					</div>
					<div className="w-100 d-flex justify-content-center">
						<button
							onClick={e => {
								e.preventDefault();
								handleSubmit();
							}}
							type="submit"
							className="btn botonOutline py-2 my-1 text-center">
							{props.accion == "crear" ? "Guardar Persona" : "Guardar cambios"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

PersonaCyE.propTypes = {
	accion: PropTypes.string
};
