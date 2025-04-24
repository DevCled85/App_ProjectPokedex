// stores/pokemonStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemonStore', {
    state: () => ({
        pokemons: []
    }),
    actions: {
        async fetchPokemons() {
            try {
                const promises = []
                for (let i = 1; i <= 20; i++) {
                    promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
                }
                const results = await Promise.all(promises)
                this.pokemons = results.map(res => ({
                    id: res.data.id,
                    name: res.data.name,
                    image: res.data.sprites.other['official-artwork'].front_default,
                    abilities: res.data.abilities.map(a => a.ability.name)
                }))
            } catch (err) {
                console.error('Erro ao buscar pokémons:', err)
            }
        }
    }
})
