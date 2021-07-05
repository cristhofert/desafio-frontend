import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 }
];

export const TotalEmpresasRubro = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 mt-5 text-center">
					<h1>Cantidad total de empresas por rubro de actividad</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-8">
					<VictoryChart domainPadding={10} theme={VictoryTheme.material}>
						<VictoryAxis tickValues={["Rubro 1", "Rubro 2", "Rubro 3", "Rubro 4"]} />
						<VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
						<VictoryBar data={data} x={"quarter"} y={"earnings"} />
					</VictoryChart>
				</div>
			</div>
		</div>
	);
};
