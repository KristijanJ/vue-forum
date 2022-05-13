<template>
    <nav-bar />
    <div class="container">
        <div class="page-header">
            CATEGORIES
        </div>
        <forum-board
            v-for="(forumBoard, index) in forumBoards"
            :key="index"
            class="m-30-b"
            :forum-board="forumBoard"
        />
    </div>
</template>

<script>
import forumBoardsMockData from './assets/mocks/forumBoardsMockData';

import NavBar from './components/NavBar.vue';
import ForumBoard from './components/ForumBoard.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        ForumBoard
    },
    data () {
        return {
            forumBoards: forumBoardsMockData
        };
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
