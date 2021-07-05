import React, { useEffect, useContext } from "react";
import { ListaDeItems } from "../component/listaDeItems";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Buscador } from "../component/buscador";

export const Departamento = () => {
	const { store, actions } = useContext(Context);

	const cargarDatos = async () => {
		await actions.cargarDepartamentos();
		await actions.cargarBuscador("departamentos");
	};
	useEffect(() => {
		cargarDatos();
	}, []);
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-sm-12 col-md-9">
					<Buscador tipo={"departamentos"} placeholderBuscador={"Buscar Departamento"} />
				</div>
				<div className="col-sm-12 col-md-3 ">
					<div className="my-3">
						<Link type="button" className="btn boton py-2" to="/departamentos/nuevo">
							Agregar Departamento
						</Link>
					</div>
				</div>
			</div>
			<ListaDeItems
				tipo="departamentos"
				primerBoton="Ver localidades"
				primerBotonTo="/departamentos/:id/localidades"
				segundoBoton="Eliminar"
			/>
		</div>
	);
};
