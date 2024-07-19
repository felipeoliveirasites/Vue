<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    </div>
    <!-- os componentes dp vue podem ter apenas um elemento routeLocationKey(base) -->  
</template>

<script>

    export default {
        name: 'PrimeiroComponente',
        data() {
            return {
                nome: "Felipe",
                profissao: "Programador"
            }
        }
    }
</script>