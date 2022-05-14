<template>
    <nav-bar />
    <home-page />
</template>

<script>
import NavBar from './components/NavBar.vue';
import HomePage from './pages/HomePage.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        HomePage
    }
};
</script>

<style>
@import './assets/css/style.css';
</style>
