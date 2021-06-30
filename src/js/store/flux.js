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
			departamentos: [
				{ nombre: "departamento1", id: 1 },
				{ nombre: "departamento2", id: 2 },
				{ nombre: "departamento3", id: 3 },
				{ nombre: "departamento4", id: 4 },
				{ nombre: "departamento5", id: 5 },
				{ nombre: "departamento6", id: 6 },
				{ nombre: "departamento7", id: 7 },
				{ nombre: "departamento8", id: 8 }
			],
			localidades: [
				{ nombre: "localidades", id: 1 },
				{ nombre: "localidades", id: 2 },
				{ nombre: "localidades", id: 3 },
				{ nombre: "localidades", id: 4 },
				{ nombre: "localidades", id: 5 },
				{ nombre: "localidades", id: 6 },
				{ nombre: "localidades", id: 7 },
				{ nombre: "localidades", id: 8 }
			]
		},
		actions: {
			loadSomeData: async () => {
				const actions = getActions();
				await actions.cargarPersonas();
			},
			cargarPersonas: async () => {
				const store = getStore();
				let url = process.env.BACKEND_URL + "/persona";

				let options = { method: "GET" };

				const res = await fetch(url, options);
				const data = await res.json();
				store.personas = data;
			},
			obtenerPersonaPorID: async id => {
				const store = getStore();
				const res = await store.personas.find(persona => {
					return persona.id == id;
				});
				return res;
			}
		}
	};
};

export default getState;
