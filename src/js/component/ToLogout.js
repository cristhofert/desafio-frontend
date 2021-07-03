import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ToLogout = () => {
	const { store, actions } = useContext(Context);

	const logout = () => {
		actions.logout();
	};

	return (
		<div className="d-flex justify-content-end">
			{!sessionStorage.getItem("token") || sessionStorage.getItem("token") === "undefined" ? (
				""
			) : (
				<button className="btn boton m-3" onClick={logout}>
					Cerrar sesión
				</button>
			)}
		</div>
	);
};
