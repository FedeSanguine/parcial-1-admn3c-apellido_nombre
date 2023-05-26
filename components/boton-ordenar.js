console.log("Se ha cargado el componente boton-ordenar.js")

Vue.component('boton-ordenar', {
    template: `
    <div class="dropdown">
    <button class="btn bg-n color dropdown-toggle mx-2 " type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        Ordenar
    </button>
    <div class="dropdown-menu bg-secondary">
        <div>
            <div>
                <button class="btn btn-secondary" v-on:click="ordenarMenor">Ordenar de menor a
                    mayor</button>
                <button class="btn btn-secondary" v-on:click="ordenarMayor">Ordenar de mayor a
                    menor</button>
            </div>
        </div>
    </div>
</div>
    `,
    props: ['ordenarMenor', 'ordenarMayor'],

    data: function () {
        return {
        }
    }

});