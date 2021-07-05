import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ItemDeLista } from "./itemDeLista";
import { Link, useLocation, useParams } from "react-router-dom";

export const Lista = props => {
	const { store, actions } = useContext(Context);
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
