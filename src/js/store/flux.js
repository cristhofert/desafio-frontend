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
			personas: [
				{ nombre: "persona 1", id: 1 },
				{ nombre: "persona 2", id: 2 },
				{ nombre: "persona 3", id: 3 },
				{ nombre: "persona 4", id: 4 },
				{ nombre: "persona 5", id: 5 }
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
