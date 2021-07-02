const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			asociados: [
				{ nombre: "Leandro Matonte", id: 1 },
				{ nombre: "asociado 2", id: 2 },
				{ nombre: "asociado 3", id: 3 },
				{ nombre: "asociado 4", id: 4 }
			],
			empresas: [
				{ nombre: "empresa1", id: 1 },
				{ nombre: "empresa2", id: 2 },
				{ nombre: "empresa3", id: 3 },
				{ nombre: "empresa4", id: 4 },
				{ nombre: "empresa5", id: 5 },
				{ nombre: "empresa6", id: 6 },
				{ nombre: "empresa7", id: 7 },
				{ nombre: "empresa8", id: 8 }
			],
			personas: [],
			departamentos: [],
			localidades: []
		},
		actions: {
			loadSomeData: async () => {
				const actions = getActions();
				await actions.cargarPersonas();
			},
			cargarPersonas: async () => {
				let url = process.env.BACKEND_URL + "/persona";

				let options = { method: "GET" };

				const res = await fetch(url, options);
				const data = await res.json();
				setStore({ personas: data });
			},
			obtenerPersonaPorID: async id => {
				const store = getStore();
				const res = await store.personas.find(persona => {
					return persona.id == id;
				});
				return res;
			},
			cargarDepartamentos: async () => {
				let url = process.env.BACKEND_URL + "/departamento";

				let options = { method: "GET" };

				const res = await fetch(url, options);
				const data = await res.json();
				setStore({ departamentos: data });
			},
			agregarNuevaLocalidad: async (idDepartamento, nombre) => {
				const store = getStore();
				let url = process.env.BACKEND_URL + `/localidad/${idDepartamento}`;

				const body = { nombre: nombre };
				const bodyJSON = JSON.stringify(body);

				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: bodyJSON
				};

				const res = await fetch(url, options);
				const data = await res.json();

				setStore({ localidades: [...store.localidades, data] });

				return res.ok;
			},
			obtenerLocalidades: async idDepartamento => {
				const url = process.env.BACKEND_URL + `/departamento/${idDepartamento}/localidades`;
				const options = { method: "GET" };

				const res = await fetch(url, options);
				const localidadesDatos = await res.json();
				setStore({ localidades: localidadesDatos });
			},
			obtenerLocalidadPorIDBackEnd: async idLocalidad => {
				const store = getStore();
				const url = process.env.BACKEND_URL + `/localidad/${idLocalidad}`;
				const options = { method: "GET" };

				const res = await fetch(url, options);
				const localidad = await res.json();
				setStore({ localidades: [...store.localidades, localidad] });
			},
			obtenerLocalidadPorID: async id => {
				const store = getStore();
				const res = await store.localidades.find(localidad => {
					return localidad.id == id;
				});
				return res;
			},
			borrarLocalidad: async id => {
				const store = getStore();
				let url = process.env.BACKEND_URL + `/localidad/${id}`;

				let options = { method: "DELETE" };

				const res = await fetch(url, options);
				let nuevoLocalidades = [];
				if (res.ok) {
					nuevoLocalidades = store.localidades.filter(localidad => {
						return localidad.id != id;
					});
				}
				setStore({ localidades: nuevoLocalidades });
			},
			agregarDepartamento: async nombre => {
				const store = getStore();
				let url = process.env.BACKEND_URL + "/departamento";

				let body = { nombre: nombre };
				let bodyJSON = JSON.stringify(body);

				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: bodyJSON
				};

				const res = await fetch(url, options);
				const data = res.json();

				setStore({ departamentos: [...store.departamentos, data] });
				return res.ok;
			},
			borrarDepartamento: async id => {
				const store = getStore();
				let url = process.env.BACKEND_URL + `/departamento/${id}`;

				let options = { method: "DELETE" };

				const res = await fetch(url, options);
				let nuevoDepartamentos = [];
				if (res.ok) {
					nuevoDepartamentos = store.departamentos.filter(departamento => {
						return departamento.id != id;
					});
				}
				setStore({ departamentos: nuevoDepartamentos });
			}
		}
	};
};

export default getState;
