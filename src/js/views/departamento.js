import React from "react";
import { ListaDeItems } from "../component/listaDeItems";
import { Link } from "react-router-dom";

export const Departamento = () => (
	<div className="container">
		<div className="row d-flex justify-content-center">
			<div className="col-sm-12 col-md-3 my-auto ">
				<Link type="button" className="btn boton py-2" to="/departamentos/nuevo">
					Agregar Departamento
				</Link>
			</div>
		</div>
		<ListaDeItems tipo="departamentos" primerBoton="Ver localidades" segundoBoton="Eliminar" />
	</div>
);
