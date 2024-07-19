<template>
    <div>
        <h1><PrimeiroComponente /></h1>
        <p>o dado de app é: {{ testando }}</p>
        <!-- este cara(App.vue) abriga componente mas também pode ser tratado como componente
         podemos dixer que tudo do vue é um componente apesar deste aqui ser considerado o 
         componente root da aplicação-->
    </div>
</template>

<!-- temos que exportar ele ele não entende exatamente o que agente esta querendo dizer -->

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default {
  components: { PrimeiroComponente },
    name: 'App',
    components: {
        PrimeiroComponente
    },
    data() {
        return {
            testando: "Teste"
        }
    } 
}

/* import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
}) */
</script>
