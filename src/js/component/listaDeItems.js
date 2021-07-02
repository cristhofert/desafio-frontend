import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Item } from "../component/item";

export const ListaDeItems = props => {
	const { store, actions } = useContext(Context);

	const cargarDatos = async () => {
		await actions.cargarDepartamentos();
	};

	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="lista p-4 shadow my-2">
			{store[props.tipo].length > 0 ? (
				store[props.tipo].map(itemLista => {
					return (
						<Item
							key={itemLista.id}
							id={itemLista.id}
							nombre={itemLista.nombre}
							primerBoton={props.primerBoton}
							segundoBoton={props.segundoBoton}
							primerBotonTo={props.primerBotonTo}
						/>
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

ListaDeItems.propTypes = {
	tipo: PropTypes.string,
	primerBoton: PropTypes.string,
	primerBotonTo: PropTypes.string,
	segundoBoton: PropTypes.string
};
