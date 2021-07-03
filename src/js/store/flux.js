const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			asociados: [
				{ nombre: "Leandro Matonte", id: 1 },
				{ nombre: "asociado 2", id: 2 },
				{ nombre: "asociado 3", id: 3 },
				{ nombre: "asociado 4", id: 4 }
			],
			personas: [
				{ nombre: "persona 1", id: 1 },
				{ nombre: "persona 2", id: 2 },
				{ nombre: "persona 3", id: 3 },
				{ nombre: "persona 4", id: 4 },
				{ nombre: "persona 5", id: 5 }
			],
			empresa: {
				razon_social: "Cargando...",
				nombre_fantasia: "Cargando...",
				RUT: "Cargando...",
				direccion: "Cargando...",
				email: "Cargando...",
				celular: "Cargando...",
				telefono: "Cargando...",
				nro_BPS: "Cargando...",
				nro_referencia: "Cargando...",
				actividad_principal: "Cargando...",
				actividad_secunadria: "Cargando...",
				fecha_afiliacion: "2021-07-15",
				fecha_inicio_empresa: "2021-07-15",
				estado: "Cargando...",
				fecha_de_baja: "2021-07-07",
				observaciones: "Cargando...",
				imagen: "Cargando..."
			},
			departamentos: [],
			localidades: [],
			empresas: [],
			user: {}
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
			},
			getMiEmpresa: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(`${process.env.BACKEND_URL}/mi_empresa`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ empresa: result }))
					.catch(error => console.error("error", error));
			},
			actualizarMiEmpresa: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify(getStore().empresa);
				console.log(raw);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(`${process.env.BACKEND_URL}/mi_empresa`, requestOptions)
					.then(response => response.json())
					.then(result => getActions().getMiEmpresa())
					.catch(error => console.log("error", error));
			},
			setEmpresa: empresa => {
				const store = getStore();
				setStore({ empresa: { ...store.empresa, ...empresa } });
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
			},
			getMiAsociados: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				return fetch(process.env.BACKEND_URL + "/asociados/", requestOptions)
					.then(res => res.json())
					.then(data => getActions().mapAsociados(data))
					.then(asociados => setStore({ asociados }))
					.catch(err => err);
			},
			agregarMiAsociado: (cargo, personaId) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify({ cargo, personaId });
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(process.env.BACKEND_URL + "/asociados/nuevo", requestOptions)
					.then(response => response.json())
					.then(result => result)
					.catch(error => console.log("error", error));
			},
			obtenerInfoUsuario: async username => {
				let url = process.env.BACKEND_URL + "/user/" + username;

				let options = { method: "GET", headers: { "Content-Type": "application/json" } };

				const res = await fetch(url, options);
				const data = await res.json();
				setStore({ user: data });
			},
			login: async (username, password) => {
				let url = process.env.BACKEND_URL + "/login";

				const body = { username: username, password: password };
				const bodyJSON = JSON.stringify(body);

				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: bodyJSON
				};

				const res = await fetch(url, options);
				const data = await res.json();
				if (res.ok) {
					setStore({ user: data.user });
					sessionStorage.setItem("token", data.token);
					sessionStorage.setItem("username", data.user.username);
				}

				return res.ok;
			},
			logout: () => {
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("username");
				setStore({
					asociados: [
						{ nombre: "Leandro Matonte", id: 1 },
						{ nombre: "asociado 2", id: 2 },
						{ nombre: "asociado 3", id: 3 },
						{ nombre: "asociado 4", id: 4 }
					],
					personas: [
						{ nombre: "persona 1", id: 1 },
						{ nombre: "persona 2", id: 2 },
						{ nombre: "persona 3", id: 3 },
						{ nombre: "persona 4", id: 4 },
						{ nombre: "persona 5", id: 5 }
					],
					empresa: {
						razon_social: "Cargando...",
						nombre_fantasia: "Cargando...",
						RUT: "Cargando...",
						direccion: "Cargando...",
						email: "Cargando...",
						celular: "Cargando...",
						telefono: "Cargando...",
						nro_BPS: "Cargando...",
						nro_referencia: "Cargando...",
						actividad_principal: "Cargando...",
						actividad_secunadria: "Cargando...",
						fecha_afiliacion: "2021-07-15",
						fecha_inicio_empresa: "2021-07-15",
						estado: "Cargando...",
						fecha_de_baja: "2021-07-07",
						observaciones: "Cargando...",
						imagen: "Cargando..."
					},
					departamentos: [],
					localidades: [],
					empresas: [],
					user: {}
				});
			}
		}
	};
};

export default getState;
