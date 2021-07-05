import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Item } from "../component/item";

export const ListaDeItems = props => {
	const { store, actions } = useContext(Context);
	const handleClick = id => {
		if (props.tipo == "departamentos") {
			actions.borrarDepartamento(id);
		} else {
			props.segundoBotonClick();
		}
	};
	return (
		<div className="lista p-4 shadow my-2">
			{store.arregloFiltrado.length > 0 ? (
				store.arregloFiltrado.map(itemLista => {
					return (
						<Item
							key={itemLista.id}
							id={itemLista.id}
							nombre={itemLista.nombre || itemLista.name}
							primerBoton={props.primerBoton}
							segundoBoton={props.segundoBoton}
							segundoBotonClick={() => {
								handleClick(itemLista.id);
							}}
							primerBotonTo={
								props.primerBotonTo
									? itemLista.username
										? props.primerBotonTo.replace(":username", itemLista.username)
										: props.primerBotonTo.replace(":id", itemLista.id)
									: ""
							}
							tipo={props.tipo}
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
	segundoBoton: PropTypes.string,
	segundoBotonClick: PropTypes.func
};
