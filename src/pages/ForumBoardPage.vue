<template>
    <div class="container">
        <div class="page-header">
            {{ selectedForumBoard.title }}
        </div>
        <div
            v-for="(post, index) in selectedForumBoard.posts"
            :key="index"
            class="post"
        >
            <router-link :to="`/board/${$route.params.id}/post/${post.id}`" class="post-text">
                {{ post.title }}
            </router-link>
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
.post {
    margin-bottom: 30px;
}
</style>
