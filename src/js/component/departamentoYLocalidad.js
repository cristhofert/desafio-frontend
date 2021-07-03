import React from "react";

export const DepartamentoYLocalidad = () => {
	return (
		<>
			<div className="form-group col-md-3">
				<label htmlFor="inputPassword4">Departamento</label>
				<select id="departamento" className="form-control" required>
					<option value="MONTEVIDEO">MONTEVIDEO</option>
					<option value="ARTIGAS">ARTIGAS</option>
					<option value="CANELONES">CANELONES</option>
					<option value="CERRO LARGO">CERRO LARGO</option>
					<option value="COLONIA">COLONIA</option>
					<option value="DURAZNO">DURAZNO</option>
					<option value="FLORES">FLORES</option>
					<option value="FLORIDA">FLORIDA</option>
					<option value="LAVALLEJA">LAVALLEJA</option>
					<option value="MALDONADO">MALDONADO</option>
					<option value="PAYSANDU">PAYSANDU</option>
					<option value="RIO NEGRO">RIO NEGRO</option>
					<option value="RIVERA">RIVERA</option>
					<option value="ROCHA">ROCHA</option>
					<option value="SALTO">SALTO</option>
					<option value="SAN JOSE">SAN JOSE</option>
					<option value="SORIANO">SORIANO</option>
					<option value="TACUAREMBO">TACUAREMBO</option>
					<option value="TREINTA Y TRES">TREINTA Y TRES</option>
				</select>
			</div>
			<div className="form-group col-md-3">
				<label htmlFor="inputPassword4">Localidad</label>
				<select id="departamento" className="form-control" required>
					<option value="MONTEVIDEO">MONTEVIDEO</option>
				</select>
			</div>
		</>
	);
};
