const MyNameApp = {
    data() {
        return {
            name: "João",
            age: 30
        }
    }
} // dinamicamente exportar um dado
// precisamos instanciar
// exportar dados esta é a regra de negócio do Vue

Vue.createApp(MyNameApp).mount("#app") //classe dada pelo script no html podemos utilizar o metodo 