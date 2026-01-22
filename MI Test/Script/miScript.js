const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            puntos: 0,
            inicio: true,
            test: false,
            resultado: false,

            preguntas: [
                {
                    texto: 'La combinacion del fatalitie:1 de scorpion',
                    seleccion: null,
                    respuestas: [
                        { texto: '← ← ↓ ↓ × (PlayStation) /  ← ← ↓ ↓ A (Xbox)', puntos: 1 },
                        { texto: '↑ ↓ ← → □ (PlayStation) /  ↑ ↑ ↓ ← □ △ X(Xbox)', puntos: 0 }
                    ]
                },
                {
                    texto: '¿Como se llama el fatalitie:2 de sub-zero?',
                    seleccion: null,
                    respuestas: [
                        { texto: '→ ↓ ← ← △ (PlayStation)  /  → ↓ ← ← Y (Xbox) ', puntos: 1 },
                        { texto: '← ↑ ↑ ↓ ↓ △ (PlayStation)  /  ↑ ↑ ↓ ← □ Y (Xbox)', puntos: 0 }
                    ]
                },
                {
                    texto: 'Comandos para el brutalitie:2 de Raiden',
                    seleccion: null,
                    respuestas: [
                        { texto: '→ ← ↓ ↑ × (PlayStation) / → ← ↓ ↑ A (Xbox) ', puntos: 1 },
                        { texto: '↓ ← ↓ → × (PlayStation)  / ↑ ↑ ↓ ← A B X(Xbox)', puntos: 0 }
                    ]
                }
            ]
        }
    },
    methods: {
        comenzarTest() {
            if (this.nombre !== '') {
                this.inicio = false
                this.test = true
            }
        },
        finalizarTest() {
            this.puntos = 0
            this.preguntas.forEach(p => {
                this.puntos += Number(p.seleccion)
            })
            this.test = false
            this.resultado = true
        },
        reiniciar() {
            this.nombre = ''
            this.puntos = 0
            this.inicio = true
            this.resultado = false
            this.preguntas.forEach(p => p.seleccion = null)
        }
    }
})

app.mount('#app')
