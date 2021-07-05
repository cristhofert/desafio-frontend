import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { DepartamentoYLocalidad } from "../component/departamentoYLocalidad";
import { Context } from "../store/appContext";

export const CrearEmpresa = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [razon_social, setRazon_social] = useState("");
	const [nombre_fantasia, setNombre_fantasia] = useState("");
	const [RUT, setRUT] = useState("");
	const [direccion, setDireccion] = useState("");
	const [email, setEmail] = useState("");
	const [celular, setCelular] = useState("");
	const [telefono, setTelefono] = useState("");
	const [nro_BPS, setNro_BPS] = useState("");
	const [nro_referencia, setNro_referencia] = useState("");
	const [actividad_principal, setActividad_principal] = useState("");
	const [actividad_secundaria, setActividad_secundaria] = useState("");
	const [fecha_afiliacion, setFecha_afiliacion] = useState("");
	const [fecha_inicio_empresa, setFecha_inicio_empresa] = useState("");
	const [estado, setEstado] = useState("activo");
	const [fecha_de_baja, setFecha_de_baja] = useState("");
	const [observaciones, setObservaciones] = useState("");
	const [imagen, setImagen] = useState("imagen.png");

	const crearEmpresa = async () => {
		const localidadID = store.departamentoYLocalidad.localidad ? store.departamentoYLocalidad.localidad.id : "";
		const body = {
			razon_social: razon_social,
			nombre_fantasia: nombre_fantasia,
			RUT: RUT,
			direccion: direccion,
			email: email,
			celular: celular,
			telefono: telefono,
			nro_BPS: nro_BPS,
			nro_referencia: nro_referencia,
			actividad_principal: actividad_principal,
			actividad_secunadria: actividad_secundaria,
			fecha_afiliacion: fecha_afiliacion,
			fecha_inicio_empresa: fecha_inicio_empresa,
			estado: estado == "activo" ? true : false,
			fecha_de_baja: fecha_de_baja,
			observaciones: observaciones,
			imagen: imagen,
			localidadID: localidadID
		};
		console.log(body);
		const res = await actions.crearEmpresa(body);
		if (res) {
			history.push("/empresas");
		}
	};
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
								<label htmlFor="nombreFantasia">Nombre Fantasía</label>
								<input
									onChange={e => setNombre_fantasia(e.target.value)}
									value={nombre_fantasia}
									type="text"
									className="form-control"
									id="nombreFantasia"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="email">Email</label>
								<input
									onChange={e => setEmail(e.target.value)}
									value={email}
									type="email"
									className="form-control"
									id="email"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="razonSocial">Razón social</label>
								<input
									onChange={e => setRazon_social(e.target.value)}
									value={razon_social}
									type="text"
									className="form-control"
									id="razonSocial"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="celular">Celular</label>
								<input
									onChange={e => setCelular(e.target.value)}
									value={celular}
									type="number"
									className="form-control"
									id="celular"
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
								<label htmlFor="numeroRUT">Número de RUT</label>
								<input
									onChange={e => setRUT(e.target.value)}
									value={RUT}
									type="number"
									className="form-control"
									id="numeroRUT"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="telefono">Teléfono</label>
								<input
									onChange={e => setTelefono(e.target.value)}
									value={telefono}
									type="number"
									className="form-control"
									id="telefono"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="numeroBPS">Número de BPS</label>
								<input
									onChange={e => setNro_BPS(e.target.value)}
									value={nro_BPS}
									type="number"
									className="form-control"
									id="numeroBPS"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="rubroPrincipal">Rubro de actividad principal</label>
								<input
									onChange={e => setActividad_principal(e.target.value)}
									value={actividad_principal}
									type="text"
									className="form-control"
									id="rubroPrincipal"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="numeroReferencia">Numero de referencia</label>
								<input
									onChange={e => setNro_referencia(e.target.value)}
									value={nro_referencia}
									type="number"
									className="form-control"
									id="numeroReferencia"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="rubroSecundario">Rubro de actividad secundaria</label>
								<input
									onChange={e => setActividad_secundaria(e.target.value)}
									value={actividad_secundaria}
									type="text"
									className="form-control"
									id="rubroSecundario"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="fechaAfiliacion">Fecha de afiliación</label>
								<input
									onChange={e => setFecha_afiliacion(e.target.value)}
									value={fecha_afiliacion}
									id="fechaAfiliacion"
									type="date"
									className="form-control"
									placeholder="Fecha"
									required
								/>
							</div>
							<DepartamentoYLocalidad clases={"form-group col-md-3"} />
							<div className="form-group col-md-6">
								<label htmlFor="fechaInicio">Fecha de Inicio Empresa</label>
								<input
									onChange={e => setFecha_inicio_empresa(e.target.value)}
									value={fecha_inicio_empresa}
									id="fechaInicio"
									type="date"
									className="form-control"
									placeholder="Fecha"
									required
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="direccion">Dirección</label>
								<input
									onChange={e => setDireccion(e.target.value)}
									value={direccion}
									type="text"
									className="form-control"
									id="direccion"
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="fechaBaja">Fecha de baja</label>
								<input
									onChange={e => setFecha_de_baja(e.target.value)}
									value={fecha_de_baja}
									id="fechaBaja"
									type="date"
									className="form-control"
									placeholder="Fecha"
									required
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="estado">Estado</label>
								<select
									onChange={e => setEstado(e.target.value)}
									value={estado}
									id="estado"
									className="form-control"
									required>
									<option value="activo">ACTIVO</option>
									<option value="inactivo">INACTIVO</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="comentarios">Observaciones</label>
								<textarea
									onChange={e => setObservaciones(e.target.value)}
									value={observaciones}
									id="comentarios"
									className="form-control"
									placeholder="Comentarios"
									required
								/>
							</div>
							<div className="col-md-6" id="btnGuardar">
								<div className="d-flex justify-content-end align-items-end h-100">
									<button
										onClick={e => {
											e.preventDefault();
											crearEmpresa();
										}}
										type="button"
										className="btn boton mb-3">
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
