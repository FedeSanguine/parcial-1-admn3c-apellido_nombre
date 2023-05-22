
const app = new Vue({
    el: '#contenedor',
    data: {
        enable: false,
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
        inde: 0,
        indice: -1,
        texto: '',
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
            console.log(isLogin)
            if(isLogin) {
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
            localStorage.setItem('login', 'true');
            this.ocultarPanelLogin();
        },
        toogleLogin() {
            if(!this.login) {
                this.mostrarPanelLogin();
            } else {
                console.log('Se ha cerrado la sesión');
                localStorage.setItem('login', 'false');
                this.login = false;
            }
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
            localStorage.setItem('productos')
            return this.lista

        },

        modificar(index){
            console.log(index)
            let productoModal = this.lista[index]
            this.nombreProducto = productoModal.nombre
            this.precioProducto = productoModal.precio
            this.descripcionProducto = productoModal.descripcion
            this.imagenProducto = productoModal.imagen
            this.consolaProducto = productoModal.consola
            this.inde = index
            return (this.lista, this.inde)
        },

        modificarProductos(){
            
            console.log(this.inde)
            this.lista.forEach((value, indice) =>{
                if(this.inde == indice){
                    this.lista[this.inde]= {
                        nombre: this.nombreProducto,
                        precio: this.precioProducto,
                        descripcion: this.descripcionProducto,
                        imagen: this.imagenProducto,
                        consola: this.consolaProducto,
                        id: value.id,
                        cant: value.cantidad
                    }
                    console.log('esta funcionando y cargandose bien')
                    this.array[this.inde]= {
                        nombre: this.nombreProducto,
                        precio: this.precioProducto,
                        descripcion: this.descripcionProducto,
                        imagen: this.imagenProducto,
                        consola: this.consolaProducto,
                        id: value.id,
                        cant: value.cantidad
                    }
                }
            }),
            
            this.nombreProducto = '',
            this.precioProducto = '',
            this.descripcionProducto = '',
            this.imagenProducto = '',
            this.indice = -1,
            this.categoria= ''
            console.log(this.indice)
            this.guardarProductos();
            return (this.lista, this.array) 
        },
        cerrar(){
            return (this.nombreProducto = '',
            this.precioProducto = '',
            this.descripcionProducto = '',
            this.imagenProducto = '',
            this.indice = -1,
            this.categoria= '')
        },
        borrar(index){
            this.lista.forEach((valor2, indice3) => {
                console.log(index == indice3)
                let array3
                if(index == indice3){
                    array3 = this.lista.splice(index,1)

                }
            })
            this.guardarProductos()
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