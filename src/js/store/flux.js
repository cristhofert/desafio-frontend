const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [],
			asociados: [],
			usuarios: [],
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
			departamentosYlocalidades: [],
			departamentoYLocalidad: {},
			empresas: [],
			user: {},
			rubros: [{ nombre: "Cargando..." }],
			usuarioEditar: { name: "cargando..." },
			rubro: ""
		},
		actions: {
			setRubro: e => {
				setStore({ rubro: e.target.value });
			},
			crearEmpresa: async body => {
				let url = process.env.BACKEND_URL + "/empresa";

				const bodyJSON = JSON.stringify(body);
				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: bodyJSON
				};
				const res = await fetch(url, options);
				const data = await res.json();
				console.log(data);
				return res.ok;
			},
			setearDepYLoc: (departamento, localidad) => {
				const depYloc = { departamento, localidad };
				setStore({ departamentoYLocalidad: depYloc });
			},
			eliminarEmpresa: async RUT => {
				const store = getStore();
				let url =
					process.env.BACKEND_URL +
					`
				/empresa/${RUT}`;

				let options = { method: "DELETE" };

				const res = await fetch(url, options);
				let nuevaEmpresa = [];
				if (res.ok) {
					nuevaEmpresa = store.empresas.filter(empresa => {
						return empresa.RUT != RUT;
					});
				}
				setStore({ empresas: nuevaEmpresa });
			},
			eliminarRubro: async nombre => {
				const store = getStore();
				let url = `${process.env.BACKEND_URL}/rubro/${nombre}`;

				let options = { method: "DELETE" };

				const res = await fetch(url, options);
				let nuevo = [];
				if (res.ok) {
					nuevo = store.rubros.filter(rubro => {
						return rubro.nombre != nombre;
					});
				}
				setStore({ rubros: nuevo });
			},
			eliminarUsuario: async id => {
				const store = getStore();

				const res = await fetch(`${process.env.BACKEND_URL}/usuario/${id}`, { method: "DELETE" });
				if (res.ok) {
					setStore({
						usuarios: store.usuarios.filter(u => {
							return u.id != id;
						})
					});
				}
			},

			eliminarAsociado: async (RUT, idPersona) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					redirect: "follow"
				};

				const res = await fetch(
					process.env.BACKEND_URL + `/empresa_persona/${RUT}/${idPersona}`,
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
				return asociados;
			},
			agregarAsociadoAEmpresa: async (RUTEmpresa, idAsociado, cargo) => {
				let url = process.env.BACKEND_URL + "/empresa_persona";

				const body = {
					empresaId: RUTEmpresa,
					personaId: idAsociado,
					cargo: cargo
				};
				const bodyJSON = JSON.stringify(body);

				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: bodyJSON
				};

				const res = await fetch(url, options);
				return res.ok;
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
			getUsuarios: () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				return fetch(process.env.BACKEND_URL + "/user", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ usuarios: result }))
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
			loadSomeData: async () => {},
			obtenerPersonaPorID: async id => {
				const store = getStore();
				const res = await store.personas.find(persona => {
					return persona.id == id;
				});
				return res;
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
			agregarRubro: async nombre => {
				const store = getStore();
				let url = process.env.BACKEND_URL + "/rubro";

				let body = { nombre: nombre };
				let bodyHTML = JSON.stringify(body);

				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: bodyHTML
				};

				const res = await fetch(url, options);
				const data = res.json();

				setStore({ rubros: [...store.rubros, data] });
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
			actualizarUsuario: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify(getStore().usuarioEditar);
				console.log(raw);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(`${process.env.BACKEND_URL}/user`, requestOptions)
					.then(res => {
						if (res.ok) res;
						else throw res.json();
					})
					.then(response => response.json())
					.then(result => getActions().getUsuarios())
					.catch(error => console.log("error", error));
			},
			actualizarRubro: nombre => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify({ nombre: nombre, nombre_nuevo: getStore().rubro });
				console.log(raw);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(`${process.env.BACKEND_URL}/rubro`, requestOptions)
					.then(res => {
						if (res.ok) res;
						else throw res.json();
					})
					.then(response => response.json())
					.catch(error => console.log("error", error));
			},
			setEmpresa: empresa => {
				const store = getStore();
				setStore({ empresa: { ...store.empresa, ...empresa } });
			},
			setUsuario: e => {
				const store = getStore();
				setStore({ usuarioEditar: { ...store.usuarioEditar, [e.target.id]: e.target.value } });
			},
			setIsAdmin: value => {
				const store = getStore();
				setStore({ usuarioEditar: { ...store.usuarioEditar, is_admin: value } });
			},
			cargarDepartamentos: async () => {
				let url = process.env.BACKEND_URL + "/departamento";

				let options = { method: "GET" };

				const res = await fetch(url, options);
				const data = await res.json();
				setStore({ departamentos: data });
			},
			cargarRubros: async () => {
				let url = process.env.BACKEND_URL + "/rubro";

				let options = { method: "GET" };

				const res = await fetch(url, options);
				const data = await res.json();
				setStore({ rubros: data });
			},
			getUsuario: async username => {
				fetch(`${process.env.BACKEND_URL}/user/${username}`, { method: "GET" })
					.then(res => res.json())
					.then(data => setStore({ usuarioEditar: data }))
					.catch(err => console.log(err));
			},
			getRubro: async name => {
				fetch(`${process.env.BACKEND_URL}/rubro/${name}`, { method: "GET" })
					.then(res => res.json())
					.then(data => {
						setStore({ rubro: data.nombre });
					})
					.catch(err => console.log(err));
			},
			cargarDepartamentosyLocalidades: async () => {
				let url = process.env.BACKEND_URL + "/departamentoYlocalidad";

				let options = { method: "GET" };

				const res = await fetch(url, options);
				const data = await res.json();

				setStore({ departamentosYlocalidades: data });
			},
			obtenerLocalidadesPorNombre: async nombre => {
				const store = getStore();
				const departamento = await store.departamentosYlocalidades.find(departamento => {
					return departamento.nombre == nombre;
				});
				console.log(departamento);
				setStore({ localidades: departamento.localidades });
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
			borrarRubro: async name => {
				const store = getStore();
				let url = process.env.BACKEND_URL + `/rubro/${name}`;

				let options = { method: "DELETE" };

				const res = await fetch(url, options);
				let nuevoRubros = [];
				if (res.ok) {
					nuevoRubros = store.rubros.filter(rubro => {
						return rubro.nombre != name;
					});
				}
				setStore({ rubros: nuevoRubros });
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
			crearUsuario: usuario => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify(usuario);
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(process.env.BACKEND_URL + "/user", requestOptions)
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
					rubros: [],
					localidades: [],
					empresas: [],
					user: {},
					rubro: ""
				});
			}
		}
	};
};

export default getState;
