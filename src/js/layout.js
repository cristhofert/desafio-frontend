import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./views/login";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { EditarEmpresa } from "./views/editarEmpresa";
import { PerfilEmpresa } from "./views/perfilEmpresa";
import { EditarPerfilEmpresa } from "./views/editarPerfilEmpresa";
import { CrearUsuario } from "./views/crearUsuario";

import { Sidebar } from "./component/sidebar";
import { AdminEmpresas } from "./views/adminEmpresas";
import { AdminPersonas } from "./views/adminPersonas";
import { Departamento } from "./views/departamento";
import { Localidades } from "./views/localidades";
import { AsociadosEmpresa } from "./views/asociadosEmpresa";
import { AgregarAsociado } from "./views/agregarAsociado";
import { CrearPersona } from "./views/crearPersona";
import { EditarPersona } from "./views/editarPersona";
import { AgregarDepartamento } from "./views/agregarDepartamento";
import { AgregarLocalidad } from "./views/agregarLocalidad";
import { EditarLocalidad } from "./views/editarLocalidad";
import { Asociado } from "./views/asociado";
import { AsociadoNuevo } from "./views/AsociadoNuevo";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [activo, setActivo] = useState(false);
	const cambiarActivo = () => {
		setActivo(!activo);
	};

	return (
		<div className={`contenedor ${activo ? "activo" : ""} d-flex flex-column h-100`}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{sessionStorage.getItem("token") ? (
						<Sidebar activarSidebar={cambiarActivo} estadoSidebar={activo} />
					) : (
						""
					)}
					<Switch>
						<Route exact path="/">
							<Login activarSidebar={cambiarActivo} />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/asociados">
							<Asociado />
						</Route>
						<Route exact path="/asociados/agregar">
							<AsociadoNuevo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/editarEmpresa">
							<EditarEmpresa />
						</Route>
						<Route exact path="/empresas">
							<AdminEmpresas />
						</Route>
						<Route exact path="/editarEmpresa">
							<EditarEmpresa />
						</Route>
						<Route exact path="/empresas/asociados/:id">
							<AsociadosEmpresa />
						</Route>
						<Route exact path="/empresas/agregar-asociado">
							<AgregarAsociado />
						</Route>
						<Route exact path="/personas">
							<AdminPersonas />
						</Route>
						<Route exact path="/personas/crear">
							<CrearPersona />
						</Route>
						<Route exact path="/personas/editar/:id">
							<EditarPersona />
						</Route>
						<Route exact path="/departamentos">
							<Departamento />
						</Route>
						<Route exact path="/localidades/:id/">
							<EditarLocalidad />
						</Route>
						<Route exact path="/departamentos/:id/localidades">
							<Localidades />
						</Route>
						<Route exact path="/departamentos/:id/localidades/nuevo">
							<AgregarLocalidad />
						</Route>
						<Route exact path="/perfilEmpresa">
							<PerfilEmpresa />
						</Route>
						<Route exact path="/perfilEmpresa/editar">
							<EditarPerfilEmpresa />
						</Route>
						<Route exact path="/departamentos/nuevo">
							<AgregarDepartamento />
						</Route>
						<Route exact path="/crearUsuario">
							<CrearUsuario />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
