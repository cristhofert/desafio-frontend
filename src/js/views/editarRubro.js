import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "bootstrap";

export const EditarRubro = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const params = useParams();
	const [alert, setAlert] = useState("");

	useEffect(() => {
		actions.getRubro(params.nombre);
	}, []);

	const editar = () => {
		actions
			.actualizarRubro(params.nombre)
			.then(() => {
				store.rubro = "";
				history.push("/rubros");
			})
			.catch(err => setAlert(err));
	};

	return (
		<div className="container">
			{alert != "" ? (
				<div className="alert alert-danger" role="alert">
					{alert}
				</div>
			) : (
				""
			)}
			<h1 className="text-center mt-2">Editar Rubro</h1>
			<div className="contenedor-form mx-auto p-4 my-2">
				<form>
					<div className="form-group">
						<label className="label-claro" htmlFor="name">
							Nombre
						</label>
						<input
							id="name"
							type="text"
							className="form-control inputGris"
							required
							onChange={actions.setRubro}
							value={store.rubro}
						/>
					</div>
				</form>
				<div className="w-100 d-flex justify-content-center">
					<button className="btn botonOutline py-2 my-1 text-center" onClick={editar}>
						Editar
					</button>
				</div>
			</div>
		</div>
	);
};
