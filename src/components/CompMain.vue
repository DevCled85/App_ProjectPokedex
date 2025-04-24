<template>
    <main>
        <div v-if="pokemons.length === 0">Carregando pokémons...</div>
        <div class="pokemonsCard" v-else>
            <CompCardPokemon v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
        </div>
    </main>
</template>

<script setup>
import CompCardPokemon from './CompCardPokemon.vue'
import { onMounted } from 'vue'
import { usePokemonStore } from '../stores/pokemonStore'
import { storeToRefs } from 'pinia'

const store = usePokemonStore()
const { pokemons } = storeToRefs(store)

onMounted(() => {
    store.fetchPokemons()
})

defineOptions({
    name: 'CompMain'
})
</script>

<style scoped>
    main {
        padding-block: 24px;
    }
    
    .pokemonsCard {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }
</style>