const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [],
			departamentos: [],
			localidades: [],
			asociados: [],
			empresas: []
		},
		actions: {
			eliminarAsociado: async (RUT, idPersona) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					redirect: "follow"
				};

				const res = await fetch(
					process.env.BACKEND_URL +
						`
				/empresa_persona/${RUT}/${idPersona}`,
					requestOptions
				);
				if (res.ok) {
					const store = getStore();
					const nuevosAsociados = store.asociados.filter(asociado => {
						return asociado.id != idPersona;
					});
					setStore({ asociados: nuevosAsociados });
				}
			},

			mapAsociados: async data => {
				let asociados = [];
				for (let index = 0; index < data.length; index++) {
					const asociado = { ...data[index].persona, ...data[index].cargo };
					asociados.push(asociado);
				}
				console.log(asociados, data);
				return asociados;
			},

			getAsociados: async RUT => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				const res = await fetch(process.env.BACKEND_URL + "/empresa_persona/" + RUT, requestOptions);
				const data = await res.json();
				const asociados = await getActions().mapAsociados(data);
				setStore({ asociados: asociados });
			},

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
