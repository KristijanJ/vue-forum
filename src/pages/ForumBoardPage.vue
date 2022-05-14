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
            <div class="post-text">
                {{ post.text }}
            </div>
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
    margin-bottom: 20px;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 10px;
}
</style>
