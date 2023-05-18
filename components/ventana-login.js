console.log("Se ha cargado el componente ventana-login.js")

Vue.component('ventana-login', {
    template: `
        <div v-show="panelLoginVisible" class="modal" tabindex="-1" role="dialog" style="display: block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Inicio de sesión</h5>
                        <button type="button" class="close" aria-label="Close" @click="ocultarPanelLogin">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Por favor, ingrese la contraseña genérica provista.</p>
                        <input type="password" v-on:keyup.enter="iniciarSesion">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="iniciarSesion">Iniciar Sesión</button>
                        <button type="button" class="btn btn-secondary" @click="ocultarPanelLogin">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['panelLoginVisible', 'ocultarPanelLogin', 'iniciarSesion'],
    beforeMount() {
        console.log("Se va a montar el componente ventana-login");
        console.log(this.panelLoginVisible);
    },
    beforeUpdate() {
        console.log("Se va a actualizar el componente");
        console.log(this.panelLoginVisible);
    },
    data: function(){
        return {
        }
    }
});