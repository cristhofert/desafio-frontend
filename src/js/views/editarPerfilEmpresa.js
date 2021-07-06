import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { DepartamentoYLocalidad } from "../component/departamentoYLocalidad";
import { Rubro } from "../component/rubro";

export const EditarPerfilEmpresa = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		actions.getMiEmpresa();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<div className="d-flex flex-column justify-content-center align-items-center">
						<img
							className="fotoPerfil mb-2"
							src="https://www.logolynx.com/images/logolynx/e5/e5ba79334133d2cb362dd639f755a392.png"
							alt="logo empresa"
						/>
						<div className="input-group mb-3">
							<div className="custom-file">
								<input
									type="file"
									className="custom-file-input"
									id="inputGroupFile01"
									aria-describedby="fotoPerfil"
								/>
								<label className="custom-file-label" htmlFor="inputGroupFile01">
									Añadir imagen
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="col-8">
					<form>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Nombre Fantasía</label>
								<input
									type="text"
									className="form-control"
									id="inputEmail4"
									onChange={e => actions.setEmpresa({ nombre_fantasia: e.target.value })}
									value={store.empresa.nombre_fantasia}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Email</label>
								<input
									type="email"
									className="form-control"
									id="inputPassword4"
									onChange={e => actions.setEmpresa({ email: e.target.value })}
									value={store.empresa.email}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Razón social</label>
								<input
									type="text"
									className="form-control"
									id="inputEmail4"
									onChange={e => actions.setEmpresa({ razon_social: e.target.value })}
									value={store.empresa.razon_social}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Celular</label>
								<input
									type="number"
									className="form-control"
									id="inputPassword4"
									onChange={e => actions.setEmpresa({ celular: e.target.value })}
									value={store.empresa.celular}
								/>
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
								<p>{store.empresa.RUT}</p>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Teléfono</label>
								<input
									type="number"
									className="form-control"
									id="inputPassword4"
									onChange={e => actions.setEmpresa({ telefono: e.target.value })}
									value={store.empresa.telefono}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Número de BPS</label>
								<input
									type="number"
									className="form-control"
									id="inputEmail4"
									onChange={e => actions.setEmpresa({ nro_BPS: e.target.value })}
									value={store.empresa.nro_BPS}
								/>
							</div>
							<Rubro clases={"form-group col-md-6"} label={"Rubro de actividad principal"} />
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Numero de referencia</label>
								<input
									type="number"
									className="form-control"
									id="inputEmail4"
									onChange={e => actions.setEmpresa({ nro_referencia: e.target.value })}
									value={store.empresa.nro_referencia}
								/>
							</div>
							<Rubro clases={"form-group col-md-6"} label={"Rubro de actividad secundaria"} />
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Fecha de afiliación</label>
								<input
									id="fecha"
									type="date"
									className="form-control"
									placeholder="Fecha"
									required
									onChange={e => actions.setEmpresa({ fecha_afiliacion: e.target.value })}
									value={store.empresa.fecha_afiliacion}
								/>
							</div>
							<DepartamentoYLocalidad clases={"form-group col-md-3"} />
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Fecha de Inicio Empresa</label>
								<input
									id="fecha"
									type="date"
									className="form-control"
									placeholder="Fecha"
									required
									onChange={e => actions.setEmpresa({ fecha_inicio_empresa: e.target.value })}
									value={store.empresa.fecha_inicio_empresa}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Dirección</label>
								<input
									type="text"
									className="form-control"
									id="inputPassword4"
									onChange={e => actions.setEmpresa({ direccion: e.target.value })}
									value={store.empresa.direccion}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputEmail4">Fecha de baja</label>
								<input
									id="fecha"
									type="date"
									className="form-control"
									placeholder="Fecha"
									required
									onChange={e => actions.setEmpresa({ fecha_de_baja: e.target.value })}
									value={store.empresa.fecha_de_baja}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPassword4">Estado</label>
								<select
									id="departamento"
									className="form-control"
									required
									onChange={e => actions.setEmpresa({ estado: e.target.value })}
									value={store.empresa.estado}>
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
									onChange={e => actions.setEmpresa({ observaciones: e.target.value })}
									value={store.empresa.observaciones}
								/>
							</div>
							<div className="col-md-6" id="btnGuardar">
								<div className="d-flex justify-content-end align-items-end h-100">
									<button
										type="button"
										className="btn btn-success mb-3"
										onClick={() => {
											actions.actualizarMiEmpresa().then(() => history.push("/perfilEmpresa"));
										}}>
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
