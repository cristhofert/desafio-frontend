import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const DepartamentoYLocalidad = props => {
	const { store, actions } = useContext(Context);
	const [datosDireccion, setDatosDireccion] = useState([]);
	const [seleccionado, setSeleccionado] = useState(0);
	const [localidadSeleccionada, setLocalidadSeleccionada] = useState(0);
	const cargarDatos = async () => {
		if (store.departamentosYlocalidades.length == 0) {
			await actions.cargarDepartamentosyLocalidades();
		}
		actions.setearDepYLoc(store.departamentosYlocalidades[0], {});
		if (store.departamentosYlocalidades[seleccionado].localidades[0]) {
			setLocalidadSeleccionada(store.departamentosYlocalidades[seleccionado].localidades[0]);
			actions.setearDepYLoc(
				store.departamentosYlocalidades[0],
				store.departamentosYlocalidades[seleccionado].localidades[0]
			);
		}
		setDatosDireccion(store.departamentosYlocalidades);
	};

	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<>
			<div className={props.clases}>
				{props.clases == "col-sm-12 col-md-3" ? "" : <label htmlFor="departamento">Departamento</label>}
				<select
					onChange={e => {
						setSeleccionado(parseInt(e.target.value));
						actions.setearDepYLoc(
							store.departamentosYlocalidades[parseInt(e.target.value)],
							store.departamentosYlocalidades[parseInt(e.target.value)].localidades[0]
						);
					}}
					value={datosDireccion.nombre}
					id="departamento"
					className="form-control my-1"
					required>
					{datosDireccion.map((departamento, index) => {
						return (
							<option key={departamento.id} value={index}>
								{departamento.nombre}
							</option>
						);
					})}
				</select>
			</div>
			<div className={props.clases}>
				{props.clases == "col-sm-12 col-md-3" ? "" : <label htmlFor="localidad">Localidad</label>}
				<select
					onChange={e => {
						setLocalidadSeleccionada(parseInt(e.target.value));
						actions.setearDepYLoc(
							store.departamentosYlocalidades[seleccionado],
							store.departamentosYlocalidades[seleccionado].localidades[parseInt(e.target.value)]
						);
					}}
					value={localidadSeleccionada}
					id="localidad"
					className="form-control my-1"
					required>
					{datosDireccion[seleccionado] && datosDireccion[seleccionado].localidades
						? datosDireccion[seleccionado].localidades.map((localidad, index) => {
								return (
									<option key={localidad.id} value={index}>
										{localidad.nombre}
									</option>
								);
						  })
						: ""}
				</select>
			</div>
		</>
	);
};

DepartamentoYLocalidad.proptypes = {
	clases: PropTypes.string
};
