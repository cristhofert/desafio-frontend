import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Login = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const username = useRef(null);
	const passwd = useRef(null);
	const [alert, setAlert] = useState("");

	return (
		<div className="container-fluid h-100" id="fondoLogin1">
			<div className="container" id="Login">
				{!sessionStorage.getItem("token") || sessionStorage.getItem("token") === "undefined" ? (
					<div className="row justify-content-center">
						<div className="col-6">
							<div className="d-flex justify-content-center align-items-center h-100">
								<img
									alt="Centro Comercial e Industrial de San José"
									src="https://ccisanjose.com.uy/wp-content/uploads/2021/04/cropped-CCISJ-logo-sin-fondo-blanco-e1618519493910.png"
								/>
							</div>
						</div>
						<div className="col-6 div-derechaLogin">
							<h1 className="mt-3 text-center text-white" id="formLogin">
								INICIO DE SESIÓN
							</h1>
							{alert != "" ? (
								<div className="alert alert-dark" role="alert">
									{alert}
								</div>
							) : (
								""
							)}
							<div className="d-flex justify-content-center">
								<form
									onSubmit={async e => {
										e.preventDefault();
										const ok = await actions.login(username.current.value, passwd.current.value);
										if (!ok) {
											setAlert("Usuario o contraseña equivocado");
										} else {
											props.activarSidebar(true);
											if (store.user.is_admin) {
												history.push("/empresas");
											} else {
												history.push("/asociados");
											}
										}
									}}
									className="w-75">
									<div className="mb-3 mt-3">
										<label
											htmlFor="exampleInputEmail1"
											className="form-label sr-only"
											id="labelLogin">
											Nombre de usuario
										</label>
										<input
											placeholder="Nombre de usuario"
											type="text"
											className="form-control inputGris text-center"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											ref={username}
										/>
									</div>
									<div className="mb-3">
										<label
											htmlFor="exampleInputPassword1"
											className="form-label sr-only"
											id="labelLogin">
											Contraseña
										</label>
										<input
											placeholder="Contraseña"
											type="password"
											className="form-control inputGris text-center"
											id="exampleInputPassword1"
											ref={passwd}
										/>
									</div>
									<div className="justify-content-center d-flex">
										<button type="submit" className="btn mb-5" id="btnLogin">
											INGRESAR
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				) : (
					<h3>Bienvenido</h3>
				)}
			</div>
		</div>
	);
};

Login.propTypes = {
	activarSidebar: PropTypes.func
};
