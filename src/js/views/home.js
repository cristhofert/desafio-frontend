import React, { useRef, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
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
							<form className="w-75">
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
									<button
										type="button"
										className="btn btn-light mb-5"
										onClick={() => {
											actions.login(username.current.value, passwd.current.value).catch(error => {
												setAlert("Usuario o contraceña equivocado");
											});
										}}>
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
