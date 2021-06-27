import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { EditarEmpresa } from "./views/editarEmpresa";

import { Sidebar } from "./component/sidebar";
import { Footer } from "./component/footer";
import { AdminEmpresas } from "./views/adminEmpresas";
import { AdminPersonas } from "./views/adminPersonas";
import { Departamento } from "./views/departamento";
import { Localidades } from "./views/localidades";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [activo, setActivo] = useState(true);
	const cambiarActivo = () => {
		setActivo(!activo);
	};

	return (
		<div className={`contenedor ${activo ? "activo" : ""} d-flex flex-column h-100`}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Sidebar activarSidebar={cambiarActivo} estadoSidebar={activo} />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
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
						<Route exact path="/personas">
							<AdminPersonas />
						</Route>
						<Route exact path="/departamentos">
							<Departamento />
						</Route>
						<Route exact path="/departamentos/:id/localidades">
							<Localidades />
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
