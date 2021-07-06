import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryBar } from "victory";

export const Graficos = () => {
	const [activos, setActivos] = useState(0);
	const [inactivos, setInactivos] = useState(0);
	const [localidad, setLocalidad] = useState([]);
	const [rubro, setRubro] = useState([]);

	const getActivos = async () => {
		const res = await fetch(process.env.BACKEND_URL + "/empresa");
		const datos = await res.json();
		const numeroActivos = datos.filter(empresa => {
			return empresa.estado == true;
		}).length;
		setActivos(numeroActivos);
		setInactivos(datos.length - numeroActivos);
	};

	const getLocalidades = async () => {
		const res = await fetch(process.env.BACKEND_URL + "/localidad/empresa");
		const datos = await res.json();
		const datosMap = await datos.map((localidad, index) => {
			const objeto = {
				x: index + 1,
				y: localidad.empresa.length,
				label: localidad.nombre + ": \n" + localidad.empresa.length
			};
			return objeto;
		});
		setLocalidad(datosMap);
		console.log(datosMap);
	};

	const getRubros = async () => {
		const res = await fetch(process.env.BACKEND_URL + "/rubro");
		const datos = await res.json();
		const datosMap = await datos.map((rubro, index) => {
			const objeto = {
				x: index + 1,
				y: parseInt(rubro.empresa.length) + parseInt(rubro.empresaSecundaria.length),
				label:
					rubro.nombre + ": \n" + (parseInt(rubro.empresa.length) + parseInt(rubro.empresaSecundaria.length))
			};
			return objeto;
		});
		setRubro(datosMap);
		console.log(datosMap);
	};

	const cargarDatos = async () => {
		await getActivos();
		await getLocalidades();
		await getRubros();
	};
	useEffect(() => {
		cargarDatos();
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-6 mt-3 text-center">
					<div className="fondoGrafico shadow rounded p-2 my-1">
						<h1>Cantidad total de empresas activas</h1>
						<VictoryPie
							colorScale={["#0B8E73", "#05664F"]}
							labelRadius={20}
							height={300}
							style={{ labels: { fontSize: 15, fill: "white" } }}
							data={[
								{
									x: `Activas: ${activos}`,
									y: activos
								},
								{ x: `Inactivas: ${inactivos}`, y: inactivos }
							]}
						/>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-6 mt-3 text-center">
					<div className="fondoGrafico shadow rounded p-2 my-1">
						<h1>Cantidad total de empresas por localidad</h1>
						<VictoryBar
							data={localidad.length != 0 ? localidad : [{ x: 1, y: 2, label: "hola" }]}
							events={[
								{
									target: "data"
								}
							]}
						/>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-6 mt-3 text-center">
					<div className="fondoGrafico shadow rounded p-2 my-1">
						<h1>Cantidad total de empresas por rubro de actividad</h1>
						<VictoryBar
							data={rubro.length != 0 ? rubro : [{ x: 1, y: 2, label: "hola" }]}
							events={[
								{
									target: "data"
								}
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
