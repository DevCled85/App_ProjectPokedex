<template>
    <div class="cardPokemon">
        <img :src="pokemon.image" :alt="pokemon.name" class="capa" />
        <p>Nº {{ pokemon.id }}</p>
        <h1>{{ pokemon.name }}</h1>
        <div>
            <span v-for="(ability, index) in pokemon.abilities" :key="index">{{ ability }}</span>
        </div>
    </div>
</template>


<script setup>
defineProps({
    pokemon: Object
})
</script>

<style scoped>
.cardPokemon {
    width: 300px;
    border: 2px solid #555;
    background-color: #222;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    & img {
        width: 100%;
        height: 280px;
        object-fit: contain;
        background-color: #f1f1f1;
    }

    & p {
        width: 100%;
        text-align: center;
        font-size: 12px;
        font-style: italic;
        margin-block: 10px;
    }

    & h1 {
        font-size: 16px;
        margin-bottom: 10px;
        text-transform: capitalize;
    }

    & div {
        width: 100%;
        display: flex;
        padding: 5px 10px;
        justify-content: space-around;
        flex-wrap: wrap;

        & span {
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            margin-bottom: 5px;
            background-color: blueviolet;
            color: white;
            text-transform: capitalize;
        }
    }
}
</style>