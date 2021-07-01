const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			asociados: [
				{ nombre: "Leandro Matonte", id: 1 },
				{ nombre: "asociado 2", id: 2 },
				{ nombre: "asociado 3", id: 3 },
				{ nombre: "asociado 4", id: 4 }
			],

			empresas: [],
			personas: [
				{ nombre: "persona 1", id: 1 },
				{ nombre: "persona 2", id: 2 },
				{ nombre: "persona 3", id: 3 },
				{ nombre: "persona 4", id: 4 },
				{ nombre: "persona 5", id: 5 }
			]
		},
		actions: {
			getEmpresas: async () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/empresa", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ empresas: result }))
					.catch(error => console.log("error", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
				agregarDepartamento: async nombre => {
					const store = getStore();
					let url = process.env.BACKEND_URL + "/departamento";

					let body = { nombre: nombre };
					let bodyHTML = JSON.stringify(body);

					let options = {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: bodyHTML
					};

					const res = await fetch(url, options);
					const data = res.json();

					setStore({ departamentos: [...store.departamentos, data] });
					return res.ok;
				}
			}
		}
	};
};

export default getState;
