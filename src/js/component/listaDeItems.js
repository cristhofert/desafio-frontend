import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Item } from "../component/item";

export const ListaDeItems = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="lista p-4 shadow my-2">
			{store[props.tipo].length > 0 ? (
				store[props.tipo].map((itemLista, index) => {
					return (
						<Item
							key={itemLista.id || index}
							id={itemLista.id}
							nombre={itemLista.nombre || itemLista.name}
							primerBoton={props.primerBoton}
							segundoBoton={props.segundoBoton}
							segundoBotonClick={props.segundoBotonClick}
							primerBotonTo={
								props.primerBotonTo
									? props.primerBotonTo.replace(":nombre", itemLista.nombre) ||
									  props.primerBotonTo.replace(":username", itemLista.username) ||
									  props.primerBotonTo.replace(":id", itemLista.id)
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
