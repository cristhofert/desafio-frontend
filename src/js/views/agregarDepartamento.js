import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const AgregarDepartamento = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6 shadow" id="fondoLogin">
					<h1 className="mt-3 text-center">Departamento Nuevo</h1>
					<div className="d-flex justify-content-center">
						<form className="w-75">
							<div className="mb-3 mt-3">
								<input
									type="text"
									className="form-control"
									id="nombre"
									aria-describedby="Nombre"
									placeholder="Nombre"
								/>
							</div>

							<div className="justify-content-center d-flex">
								<button type="button" className="btn btn-light mb-5">
									Agregar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
