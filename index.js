
const app = new Vue({
    el: '#contenedor',
    data: {
        panelLoginVisible: false,
        login: false,
        lista: productos,
        producto: '',
        array: [],
        nombreProducto: '',
        idProducto: 0,
        descripcionProducto: '',
        precioProducto: 0,
        imagenProducto: '',
        consolaProducto: '',
        cantidadProducto: 1,
        cantidad: 0,
        indice: -1,
        array: [],
        links: [
            { text: 'Home', url: '/home', enable: true, active: true },
            { text: 'Mi perfil', url: '/about', enable: false, active: false },
            { text: 'Configuraciones', url: '/contact', enable: false, active: false },
        ],
        beforeMount() {
            console.log("Se va a montar el componente");
        },
        mounted() {
            console.log("Se ha montado el componente");
            const isLogin = JSON.parse(localStorage.getItem('login'));
            const mensaje = localStorage.getItem('mensaje');
            if(mensaje) {
                this.mensaje = mensaje;
            }
            if(isLogin) { //"true", "false" -> true
                this.login = true;
            }
        },
        destroyed() {
            console.log('Se ha destruido el componente');
        },
        beforeCreate() {
            console.log('Se ha creado el componente');
        },

    },


    computed: {
        productosFiltrados() {
            this.array = this.lista.filter(item => item.nombre.toLowerCase().includes(this.producto.toLowerCase()));
            console.log(this.array, 'array')
            console.log(this.lista, 'lista')
            return this.array
        },
    },

    methods: {
        mostrarPanelLogin() {
            this.panelLoginVisible = true;
        },
        ocultarPanelLogin() {
            this.panelLoginVisible = false;
        },
        iniciarSesion() {
            this.login = true;
            this.ocultarPanelLogin();
        },
        toogleLogin() {
            if (!this.login) {
                this.mostrarPanelLogin();
            }
            this.login = !this.login;
        },
        envioDeInformacion() {
            console.log('Se ha enviado la información');
        },

        ordenarMenor() {
            let array2 = this.lista
            let array3 = array2.sort((a, b) => (a.precio > b.precio) ? 1 : -1)
            return array3
        },
        ordenarMayor() {
            let array2 = this.lista.sort((a, b) => (a.precio < b.precio) ? 1 : -1)
            console.log(array2)
            this.lista = array2
            return this.array
        },
        VerTodosProductos() {
            this.lista = productos
            return this.array
        },
        VerPs4() {
            let array2 = this.lista.filter(item => item.consola == 'PS4')
            console.log(array2)
            this.lista = array2
            return this.array
        },
        VerXboxOne() {
            let array2 = this.lista.filter(item => item.consola == 'Xbox One')
            console.log(array2)
            this.lista = array2
            return this.array
        },
        guardarProductos() {
            let arrayString = JSON.stringify(this.lista);
            localStorage.setItem('productos', arrayString);
        },
        leerProductos() {
            let datosGuardados = localStorage.getItem('productos');
            if (datosGuardados) {
                this.lista = JSON.parse(datosGuardados);
            } else {
                this.lista = productos;
            }

        },

        agregarProductos() {
            console.log('funciono')
            this.lista.push({
                nombre: this.nombreProducto,
                precio: this.precioProducto,
                descripcion: this.descripcionProducto,
                imagen: this.imagenProducto,
                consola: this.consolaProducto,
                cantidad: this.cantidadProducto,
                id: this.contador()
            });
            console.log(this.lista)
            this.nombreProducto = '',
                this.precioProducto = '',
                this.descripcionProducto = '',
                this.imagenProducto = '',
                this.consolaProducto = ''
            this.guardarProductos();
            console.log(this.lista)
            return this.lista

        },
        contador() {
            this.idProducto = this.lista.length - 1
            this.idProducto++

            console.log(this.idProducto)
            return this.idProducto
        }

    }
});