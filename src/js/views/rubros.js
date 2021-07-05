import React, { useEffect, useContext } from "react";
import { ListaDeItems } from "../component/listaDeItems";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Rubros = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.cargarRubros();
	}, []);
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-sm-12 col-md-3 ">
					<div className="my-3">
						<Link type="button" className="btn boton py-2" to="/rubro/nuevo">
							Agregar Rubro
						</Link>
					</div>
				</div>
			</div>
			<ListaDeItems
				tipo="rubros"
				primerBoton="Editar"
				primerBotonTo="/rubro/:nombre/editar"
				segundoBoton="Eliminar"
				segundoBotonClick={(e, p) => {
					actions.eliminarRubro(p.nombre);
				}}
			/>
		</div>
	);
};
