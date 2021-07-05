import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const ItemDeLista = props => {
	const [info, setInfo] = useState(false);
	const location = useLocation();
	return (
		<>
			<div className="row">
				<div className="col-sm-12 col-md-8">
					<div className="h-100 d-flex align-items-center">
						<h3 className="text-light m-0">
							{props.tipo == "empresas" ? props.itemLista.razon_social : props.itemLista.nombre}
						</h3>
					</div>
				</div>
				<div className="col-sm-12 col-md-4">
					<div className="d-flex flex-column flex-md-row justify-content-end">
						{props.tipo == "empresas" ? (
							<Link to={`/empresas/asociados/${props.itemLista.RUT}`}>
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
								<Link to={`/personas/editar/${props.itemLista.id}`}>
									<button type="button" className="btn botonOutline m-1">
										Editar
									</button>
								</Link>
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
										eliminar(props.itemLista.id);
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
		</>
	);
};

ItemDeLista.propTypes = {
	tipo: PropTypes.string,
	itemLista: PropTypes.object
};
