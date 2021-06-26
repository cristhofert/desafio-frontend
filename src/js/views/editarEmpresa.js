import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const EditarEmpresa = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<div className="w-75 h-100 bg-dark">
						<i className="fa fa-plus" aria-hidden="true" />
					</div>
				</div>
				<div className="col-8">
					<form>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Nombre Fantasía</label>
								<input type="text" className="form-control" id="inputEmail4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Email</label>
								<input type="email" className="form-control" id="inputPassword4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Razón social</label>
								<input type="text" className="form-control" id="inputEmail4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Celular</label>
								<input type="number" className="form-control" id="inputPassword4" />
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-12">
					<form>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Número de RUT</label>
								<input type="number" className="form-control" id="inputEmail4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Teléfono</label>
								<input type="number" className="form-control" id="inputPassword4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Número de BPS</label>
								<input type="number" className="form-control" id="inputEmail4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Rubro de actividad principal</label>
								<input type="text" className="form-control" id="inputPassword4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Numero de referencia</label>
								<input type="number" className="form-control" id="inputEmail4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Rubro de actividad secundaria</label>
								<input type="text" className="form-control" id="inputPassword4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Fecha de afiliación</label>
								<input id="fecha" type="date" className="form-control" placeholder="Fecha" required />
							</div>
							<div className="form-group col-md-3">
								<label htmlFor="inputPassword4">Departamento</label>
								<select id="departamento" className="form-control" required>
									<option value="MONTEVIDEO">MONTEVIDEO</option>
									<option value="ARTIGAS">ARTIGAS</option>
									<option value="CANELONES">CANELONES</option>
									<option value="CERRO LARGO">CERRO LARGO</option>
									<option value="COLONIA">COLONIA</option>
									<option value="DURAZNO">DURAZNO</option>
									<option value="FLORES">FLORES</option>
									<option value="FLORIDA">FLORIDA</option>
									<option value="LAVALLEJA">LAVALLEJA</option>
									<option value="MALDONADO">MALDONADO</option>
									<option value="PAYSANDU">PAYSANDU</option>
									<option value="RIO NEGRO">RIO NEGRO</option>
									<option value="RIVERA">RIVERA</option>
									<option value="ROCHA">ROCHA</option>
									<option value="SALTO">SALTO</option>
									<option value="SAN JOSE">SAN JOSE</option>
									<option value="SORIANO">SORIANO</option>
									<option value="TACUAREMBO">TACUAREMBO</option>
									<option value="TREINTA Y TRES">TREINTA Y TRES</option>
								</select>
							</div>
							<div className="form-group col-md-3">
								<label htmlFor="inputPassword4">Localidad</label>
								<select id="departamento" className="form-control" required>
									<option value="MONTEVIDEO">MONTEVIDEO</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Fecha de Inicio Empresa</label>
								<input id="fecha" type="date" className="form-control" placeholder="Fecha" required />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Dirección</label>
								<input type="text" className="form-control" id="inputPassword4" />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Fecha de baja</label>
								<input id="fecha" type="date" className="form-control" placeholder="Fecha" required />
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Estado</label>
								<select id="departamento" className="form-control" required>
									<option value="MONTEVIDEO">ACTIVO</option>
									<option value="ARTIGAS">INACTIVO</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Observaciones</label>
								<textarea
									id="comentarios"
									className="form-control"
									placeholder="Comentarios"
									required
								/>
							</div>
							<div className="col-md-6" id="btnGuardar">
								<div className="d-flex justify-content-end align-items-end h-100">
									<button type="button" className="btn btn-success mb-3">
										Guardar cambios
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
