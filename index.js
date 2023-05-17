
const app = new Vue({
    el: '#contenedor',
    data: {
        panelLoginVisible: false,
        login: false,
        lista: productos,
        producto: '',
        array: [],
        links: [
            {text: 'Home', url: '/home', enable: true, active: true},
            {text: 'Mi perfil', url: '/about', enable: false, active: false},
            {text: 'Configuraciones', url: '/contact', enable: false, active: false},
        ],
    },


    computed:{
        productosFiltrados(){
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
            if(!this.login) {
                this.mostrarPanelLogin();
            }
            this.login = !this.login;
        },
        envioDeInformacion() {
            console.log('Se ha enviado la información');
        },

        ordenarMenor(){
            let array2 = this.lista
            let array3  = array2.sort((a, b) => (a.precio > b.precio) ? 1 : -1)
            return array3
        },
        ordenarMayor(){
            let array2 = this.lista.sort((a, b) => (a.precio < b.precio) ? 1 : -1)
            console.log(array2)
            this.lista = array2
            return this.array
        },

    }
});