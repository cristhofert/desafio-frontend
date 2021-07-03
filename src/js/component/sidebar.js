import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Sidebar = props => {
	return (
		<div>
			<nav className="sidebar h-100">
				<div className="d-flex justify-content-center align-items-center text-light" style={{ height: "80px" }}>
					<h1>Logo</h1>
				</div>
				<Link to="/empresas">
					<div className="itemListaSidebar d-flex align-items-center justify-content-center">
						<p>Empresas</p>
					</div>
				</Link>
				<Link to="/personas">
					<div className="itemListaSidebar d-flex align-items-center justify-content-center">
						<p>Personas</p>
					</div>
				</Link>
				<Link to="/departamentos">
					<div className="itemListaSidebar d-flex align-items-center justify-content-center">
						<div className="text-center">
							<p>Departamentos y Localidades</p>
						</div>
					</div>
				</Link>
				<Link to="/asociados">
					<div className="itemListaSidebar d-flex align-items-center justify-content-center">
						<div className="text-center">
							<p>Asociados</p>
						</div>
					</div>
				</Link>
				<Link to="/perfilEmpresa">
					<div className="itemListaSidebar d-flex align-items-center justify-content-center">
						<div className="text-center">
							<p>Perfil Empresa</p>
						</div>
					</div>
				</Link>
				<Link to="/">
					<div className="itemListaSidebar d-flex align-items-center justify-content-center">
						<div className="text-center">
							<p>Reportes</p>
						</div>
					</div>
				</Link>
			</nav>
			<nav className="navbar navbar-light bg-light">
				<button
					onClick={() => {
						props.activarSidebar();
					}}
					type="button"
					className="btn boton m-1">
					{props.estadoSidebar ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
				</button>
			</nav>
		</div>
	);
};

Sidebar.propTypes = {
	activarSidebar: PropTypes.func,
	estadoSidebar: PropTypes.bool
};
