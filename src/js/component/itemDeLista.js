import React, { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ItemDeLista = props => {
	const { store, actions } = useContext(Context);
	const [info, setInfo] = useState(false);
	const params = useParams();
	const [cargo, setCargo] = useState("Cargo");
	const [mostrarCargo, setMostrarCargo] = useState(false);

	const eliminarAsociado = idPersona => {
		actions.eliminarAsociado(params.id, idPersona);
	};

	const eliminarEmpresa = RUT => {
		actions.eliminarEmpresa(RUT);
	};

	const agregarAsociado = async idAsociado => {
		const res = await actions.agregarAsociadoAEmpresa(params.id, idAsociado, cargo);
		console.log(res);
	};
	return (
		<>
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<div className="h-100 d-flex align-items-center">
						<h3 className="text-light m-0">
							{props.tipo == "empresas" ? props.itemLista.razon_social : props.itemLista.nombre}
						</h3>
					</div>
				</div>
				<div className="col-sm-12 col-md-6">
					<div className="d-flex flex-column flex-md-row justify-content-end align-items-center">
						{props.tipo == "agregarAsociados" && mostrarCargo ? (
							<input
								onChange={e => {
									setCargo(e.target.value);
								}}
								type="text"
								className="form-control inputGris"
								id="cargo"
								value={cargo}
							/>
						) : (
							""
						)}

						{props.tipo == "empresas" ? (
							<>
								<Link to="/crearUsuario" className="btn botonOutline m-1">
									Crear Usuario
								</Link>
								<Link
									to={`/empresas/asociados/${props.itemLista.RUT}`}
									className="btn botonOutline m-1">
									Asociados
								</Link>
								<Link>
									<button type="button" className="btn botonOutline m-1">
										Editar
									</button>
								</Link>
								<button
									type="button"
									className="btn botonOutline m-1"
									onClick={() => {
										eliminarEmpresa(props.itemLista.RUT);
									}}>
									Eliminar
								</button>
							</>
						) : (
							""
						)}

						{props.tipo == "personas" ? (
							<>
								<button
									type="button"
									className="btn botonOutline m-1"
									onClick={() => {
										setInfo(!info);
									}}>
									Ver más información
								</button>
								<Link to={`/personas/editar/${props.itemLista.id}`} className="btn botonOutline m-1">
									Editar
								</Link>
								<button type="button" className="btn botonOutline m-1">
									Eliminar
								</button>
							</>
						) : (
							""
						)}

						{props.tipo == "asociados" ? (
							<>
								<button
									type="button"
									className="btn botonOutline m-1"
									onClick={() => {
										setInfo(!info);
									}}>
									+Info
								</button>
								<button
									type="button"
									className="btn botonOutline m-1"
									onClick={() => {
										eliminarAsociado(props.itemLista.id);
									}}>
									Eliminar
								</button>
							</>
						) : (
							""
						)}

						{props.tipo == "agregarAsociados" ? (
							<>
								<button
									type="button"
									className="btn botonOutline m-1"
									onClick={() => {
										setInfo(!info);
									}}>
									+Info
								</button>
								<button
									type="button"
									className="btn botonOutline m-1"
									onClick={() => {
										if (mostrarCargo) {
											agregarAsociado(props.itemLista.id);
											setMostrarCargo(!mostrarCargo);
										} else {
											setMostrarCargo(!mostrarCargo);
										}
									}}>
									{mostrarCargo ? "Confirmar" : "Agregar"}
								</button>
								{mostrarCargo ? (
									<button
										type="button"
										className="btn botonOutline m-1"
										onClick={() => {
											setCargo("Cargo");
											setMostrarCargo(false);
										}}>
										Cancelar
									</button>
								) : (
									""
								)}
							</>
						) : (
							""
						)}
					</div>
				</div>
			</div>
			{info ? (
				<div>
					<h5>Email</h5>
					<p>{props.itemLista.email}</p>
					<h5>Celular</h5>
					<p>{props.itemLista.celular}</p>
					<h5>Estado</h5>
					<p>{props.itemLista.estado}</p>
				</div>
			) : (
				""
			)}
		</>
	);
};

ItemDeLista.propTypes = {
	tipo: PropTypes.string,
	itemLista: PropTypes.object
};
