import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory";

export const Graficos = () => {
	const [activos, setActivos] = useState(0);
	const [inactivos, setInactivos] = useState(0);
	const peticion = async () => {
		const peticion = await fetch(process.env.BACKEND_URL + "/empresa");
		const respuesta = await peticion.json();
		console.log(respuesta);
		const numeroActivos = respuesta.filter(empresa => {
			return empresa.estado == true;
		}).length;
		setActivos(numeroActivos);
		setInactivos(respuesta.length - numeroActivos);
	};
	useEffect(() => {
		peticion();
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-6 mt-3 text-center">
					<h1>Cantidad de empresas activas</h1>
					<VictoryPie
						colorScale={["#0B8E73", "#05664F"]}
						labelRadius={20}
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
	);
};
