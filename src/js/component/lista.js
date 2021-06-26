import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Lista = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="lista p-4 shadow my-2">
			{store[props.tipo].length != 0
				? store[props.tipo].map(itemLista => {
						return (
							<div key={itemLista.id} className="itemLista my-2 p-3 shadow">
								<div className="row">
									<div className="col-sm-12 col-md-8">
										<div className="h-100 d-flex align-items-center">
											<h3 className="text-light m-0">{itemLista.nombre}</h3>
										</div>
									</div>
									<div className="col-sm-12 col-md-4">
										<div className="d-flex justify-content-center">
											<button type="button" className="btn botonOutline m-1">
												Editar
											</button>
											<button type="button" className="btn botonOutline m-1">
												Eliminar
											</button>
										</div>
									</div>
								</div>
							</div>
						);
				  })
				: "hol"}
		</div>
	);
};

Lista.propTypes = {
	tipo: PropTypes.string
};
