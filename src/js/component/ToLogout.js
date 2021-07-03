import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ToLogout = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const logout = () => {
		actions.logout();
		props.activarSidebar(false);
		history.push("/");
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

ToLogout.propTypes = {
	activarSidebar: PropTypes.func
};
