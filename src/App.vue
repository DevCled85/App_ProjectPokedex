<template>
    <div>
        <CompHeader />

        <CompMain />

        <CompFooter />
    </div>
</template>

<script setup>
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import CompMain from './components/CompMain.vue';

</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        height: 100vh;
    }
</style>