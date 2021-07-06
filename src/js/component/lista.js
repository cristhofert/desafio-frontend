import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ItemDeLista } from "./itemDeLista";

export const Lista = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="lista p-4 shadow my-2">
			{store.arregloFiltrado.length != 0 ? (
				store.arregloFiltrado.map(itemLista => {
					return (
						<div key={itemLista.id ? itemLista.id : itemLista.RUT} className="itemLista my-2 p-3 shadow">
							<ItemDeLista tipo={props.tipo} itemLista={itemLista} />
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
