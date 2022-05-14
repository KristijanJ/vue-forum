<template>
    <div class="container">
        <div class="page-header">
            {{ selectedForumBoard.title }}
        </div>
        <div v-for="(post, index) in selectedForumBoard.posts" :key="index">
            {{ post.text }}
        </div>
    </div>
</template>

<script>
import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

export default {
    name: 'ForumBoardPage',
    data () {
        return {
            forumBoards: getForumBoards()
        };
    },
    computed: {
        selectedForumBoard () {
            return this.forumBoards[this.$route.params.id] || {};
        }
    }
};
</script>

<style scoped>

</style>
