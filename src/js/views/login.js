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
		<div className="container">
			{alert != "" ? (
				<div className="alert alert-danger" role="alert">
					{alert}
				</div>
			) : (
				""
			)}
			{!sessionStorage.getItem("token") || sessionStorage.getItem("token") === "undefined" ? (
				<div className="row justify-content-center">
					<div className="col-6 shadow" id="fondoLogin">
						<h1 className="mt-3 text-center">Inicio de Sesión</h1>
						<div className="d-flex justify-content-center">
							<form
								onSubmit={async e => {
									e.preventDefault();
									const ok = await actions.login(username.current.value, passwd.current.value);
									if (!ok) {
										setAlert("Usuario o contraseña equivocado");
									} else {
										props.activarSidebar(true);
										history.push("/empresas");
									}
								}}
								className="w-75">
								<div className="mb-3 mt-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Nombre de usuario
									</label>
									<input
										type="text"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										ref={username}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Contraseña
									</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										ref={passwd}
									/>
								</div>
								<div className="justify-content-center d-flex">
									<button type="submit" className="btn btn-light mb-5">
										Aceptar
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
	);
};

Login.propTypes = {
	activarSidebar: PropTypes.func
};
