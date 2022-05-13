<template>
    <nav-bar />
    <div class="container">
        <div class="page-header">
            CATEGORIES
        </div>
        <forum-board v-for="i in 5" :key="i" class="m-30-b" />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ForumBoard from './components/ForumBoard.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        ForumBoard
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}
.page-header {
    text-transform: uppercase;
    margin-bottom: 20px;
}
</style>
