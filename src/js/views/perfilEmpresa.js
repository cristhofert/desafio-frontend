import React from "react";

export const PerfilEmpresa = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<div className="w-75 h-100 bg-dark">
						<i className="fa fa-plus" aria-hidden="true" />
					</div>
				</div>
				<div className="col-8 d-flex">
					<div className="col-md-9">
						<h1>Nombre Fantasía</h1>
						<h3>Razón social</h3>
					</div>
					<div className="col-md-3">
						<div className="h-100 d-flex align-items-end">
							<button type="button" className="btn boton mb-1">
								Editar perfil
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5 mb-5">
				<div className="col-sm-12 col-md-6">
					<div>
						<h4>Email</h4>
						<p>empresa@gmail.com</p>
					</div>
					<div>
						<h4>Número de RUT</h4>
						<p>30.686.957-2</p>
					</div>
					<div>
						<h4>Número de BPS</h4>
						<p>3213124213</p>
					</div>
					<div>
						<h4>Número de referencia</h4>
						<p>3213124213</p>
					</div>
					<div>
						<h4>Fecha de afiliación</h4>
						<p>12/03/2016</p>
					</div>
					<div>
						<h4>Fecha de Inicio Empresa</h4>
						<p>12/03/2010</p>
					</div>
					<div>
						<h4>Fecha de Baja</h4>
						<p>12/03/2018</p>
					</div>
					<div>
						<h4>Observaciones</h4>
						<p>Observaciones de ejemplo bla bla bla bla</p>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 div-derecha">
					<div className="pl-3">
						<div>
							<h4>Celular</h4>
							<p>099878676</p>
						</div>
						<div>
							<h4>Teléfono</h4>
							<p>4364 2312</p>
						</div>
						<div>
							<h4>Rubro de actividad principal</h4>
							<p>Rubro ejemplo</p>
						</div>
						<div>
							<h4>Rubro de actividad secundaria</h4>
							<p>Rubro ejemplo 2</p>
						</div>
						<div>
							<h4>Departamento</h4>
							<p>Flores</p>
						</div>
						<div>
							<h4>Localidad</h4>
							<p>Flores</p>
						</div>
						<div>
							<h4>Dirección</h4>
							<p>calle Artigas 327</p>
						</div>
						<div>
							<h4>Estado</h4>
							<p>Activo</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
