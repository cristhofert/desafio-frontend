const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			asociados: [
				{ nombre: "asociado 1", id: 1 },
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
			personas: []
		},
		actions: {
			loadSomeData: async () => {
				const actions = getActions();
				await actions.cargarPersonas();
			},
			cargarPersonas: async () => {
				const store = getStore();
				let url = process.env.BACKEND_URL;

				let options = { method: "GET" };

				const res = await fetch(url, options);
				const data = await res.json();
				store.personas = data;
			}
		}
	};
};

export default getState;
