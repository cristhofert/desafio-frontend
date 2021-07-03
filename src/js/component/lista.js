import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useLocation, useParams } from "react-router-dom";

export const Lista = props => {
	const { store, actions } = useContext(Context);
	const [info, setInfo] = useState(false);
	const location = useLocation();
	const params = useParams();

	const eliminar = idPersona => {
		if (params.id) actions.eliminarAsociado(params.id, idPersona);
		else actions.eliminarAsociado(store.user.empresa.RUT, idPersona);
	};

	const eliminarEmpresa = RUT => {
		actions.eliminarEmpresa(RUT);
	};

	return (
		<div className="lista p-4 shadow my-2">
			{store[props.tipo].length != 0 ? (
				store[props.tipo].map(itemLista => {
					return (
						<div key={itemLista.id} className="itemLista my-2 p-3 shadow">
							<div className="row">
								<div className="col-sm-12 col-md-6">
									<div className="h-100 d-flex align-items-center">
										<h3 className="text-light m-0">
											{props.tipo == "empresas" ? itemLista.razon_social : itemLista.nombre}
										</h3>
									</div>
								</div>
								<div className="col-sm-12 col-md-6">
									<div className="d-flex flex-column flex-md-row justify-content-end">
										{props.tipo == "empresas" ? (
											<Link to={`/empresas/asociados/${itemLista.RUT}`}>
												<button type="button" className="btn botonOutline m-1">
													Asociados
												</button>
											</Link>
										) : (
											""
										)}

										{location.pathname == "/empresas/agregar-asociado" ? (
											<button type="button" className="btn botonOutline m-1">
												Agregar
											</button>
										) : props.tipo != "asociados" ? (
											<div>
												<Link to="/crearUsuario">
													<button type="button" className="btn botonOutline m-1">
														Crear Usuario
													</button>
												</Link>
												<Link to={`/personas/editar/${itemLista.id}`}>
													<button type="button" className="btn botonOutline m-1">
														Editar
													</button>
												</Link>
												<button
													type="button"
													className="btn botonOutline m-1"
													onClick={() => {
														eliminarEmpresa(itemLista.RUT);
													}}>
													Eliminar
												</button>
											</div>
										) : (
											<div>
												<button
													type="button"
													className="btn botonOutline m-1"
													onClick={() => {
														setInfo(!info);
													}}>
													Ver más información
												</button>
												<button
													type="button"
													className="btn botonOutline m-1"
													onClick={() => {
														eliminar(itemLista.id);
													}}>
													Eliminar
												</button>
											</div>
										)}
									</div>
								</div>
							</div>
							{info ? (
								<div>
									<h5>Email</h5>
									<p>empresa@gmail.com</p>
									<h5>Celular</h5>
									<p>098787654</p>
									<h5>Estado</h5>
									<p>Activo</p>
								</div>
							) : (
								""
							)}
						</div>
					);
				})
			) : (
				<div className="itemLista my-2 p-3 shadow">
					<h2 className="text-light">Aún no hay datos.</h2>
				</div>
			)}
		</div>
	);
};

Lista.propTypes = {
	tipo: PropTypes.string
};
