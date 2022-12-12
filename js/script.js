
const { createApp } = Vue;

const path = './img/wayne-barnett-founder-ceo.jpg';


createApp({
    data() {
        return {
            title: 'Benvenuti in questa pagina!!!',
            image: path

        }
    }
}).mount('#app');

