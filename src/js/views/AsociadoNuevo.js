import React, { useContext, useState, useEffect, useRef } from "react";
import { ListaDeItems } from "../component/listaDeItems";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const AsociadoNuevo = () => {
	const { store, actions } = useContext(Context);
	const [alert, setAlert] = useState("");
	const history = useHistory();
	const modal = useRef(null);

	useEffect(() => {
		actions
		.getMiAsociados()
		.then(ok => console.log(ok))
		.catch(err => setAlert(err));
	}, []);
	
	const agregar = (_, p) => {
		//$(modal).modal("toggle");
		console.log(modal.current);
		actions
			.agregarMiAsociado("modal", p.id)
			.then(ok => history.push("/asociados"))
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
			<div className="row mt-3">
				<div className="col-12">
					<h1>Asociados</h1>
				</div>
				<div className="col-12">
					<div className="py-2">
						<input
							type="text"
							placeholder="Buscar Persona"
							className="inputGris form-control my-1"
							id="buscador"
						/>
					</div>
				</div>
			</div>
			<ListaDeItems tipo="personas" segundoBoton="Agregar" segundoBotonClick={agregar} />

			{/* Modal */}
			<div
				ref={modal}
				className="modal fade"
				id="exampleModalCenter"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">
								Modal title
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="recipient-name" className="col-form-label">
										Recipient:
									</label>
									<input type="text" className="form-control" id="recipient-name" />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
