import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ToLogout } from "./ToLogout";
import { Context } from "../store/appContext";

export const Sidebar = props => {
	const { store, actions } = useContext(Context);
	const cargarDatos = () => {
		if (!store.user.username) {
			actions.obtenerInfoUsuario(sessionStorage.getItem("username"));
		}
	};

	useEffect(
		() => {
			cargarDatos();
		},
		[store.user]
	);

	return (
		<div>
			<nav className="sidebar h-100">
				<div>
					<img
						className="mt-2 logo"
						alt="Centro Comercial e Industrial de San José"
						src="https://ccisanjose.com.uy/wp-content/uploads/2021/04/cropped-CCISJ-logo-sin-fondo-blanco-e1618519493910.png"
						width="200px"
					/>
				</div>
				{store.user.is_admin ? (
					<>
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
						<Link to="/">
							<div className="itemListaSidebar d-flex align-items-center justify-content-center">
								<div className="text-center">
									<p>Reportes</p>
								</div>
							</div>
						</Link>
					</>
				) : (
					""
				)}
				{store.user.empresa ? (
					<>
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
						</Link>{" "}
					</>
				) : (
					""
				)}
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
				<ToLogout activarSidebar={props.activarSidebar} />
			</nav>
		</div>
	);
};

Sidebar.propTypes = {
	activarSidebar: PropTypes.func,
	estadoSidebar: PropTypes.bool
};
