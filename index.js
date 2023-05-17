
Vue.component('page-content', {
    template: `
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-6 col-lg-3 col-xs-12 mb-3 px-3">
                <div class="card mb-3 h-100 rounded-4 border-dark">
                    <img class="p-3 card-img rounded-4 border-dark" src="{{imagen}}">
                    <div class="card-body h-100">
                        <p class="fs-5 fw-bold text-center">{{ nombre }}</p>
                        <p class="card-text">{{descripcion}}</p>
                    </div>
                    <ul class="list-group list-group-flush h-100">
                        <li class="list-group-item"><span class="fw-bold">Consola: </span> {{ consola }}</li>
                        <li class="list-group-item"><span class="fw-bold">Precio: </span>{{ precio }}</li>
                    </ul>
                </div>
            </div>    
        </div>    
    </div>
    `,
    props: ['nombre', 'consola', 'descripcion', 'precio', 'imagen' ],
    data: function(){
        return {
        }
    }
});

const app = new Vue({
    el: '#contenedor',
    data: {
        panelLoginVisible: false,
        login: false,
        juegos: [
            {
                nombre: 'Fifa 22',
                consola: 'PS4',
                descripcion: 'Juegos',
                precio: '$8500',
                imagen: '....',

            },
            {
                nombre: 'GTA V',
                consola: 'PS4',
                descripcion: 'Juegos',
                precio: '$8500',
                imagen: '....',
            },
            {
                nombre: 'Mortal Kombat X',
                consola: 'PS4',
                descripcion: 'Juegos',
                precio: '$8500',
                imagen: '....',
            },
            {
                nombre: 'Asassins Creed',
                consola: 'PS4',
                descripcion: 'Juegos',
                precio: '$8500',
                imagen: '....',
            }

        ],
        links: [
            {text: 'Home', url: '/home', enable: true, active: true},
            {text: 'Mi perfil', url: '/about', enable: false, active: false},
            {text: 'Configuraciones', url: '/contact', enable: false, active: false},
        ]
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
    }
});