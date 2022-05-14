<template>
    <div class="container">
        <div class="page-nav-back">
            <router-link :to="`/board/${$route.params.id}`">
                <i class="fas fa-angle-left" /> Back
            </router-link>
        </div>
        <div class="page-header">
            {{ selectedForumBoardPost.title }}
        </div>
        <div class="post-text">
            {{ selectedForumBoardPost.text }}
        </div>
        <div class="post-author">
            <div class="post-user-photo m-10-r" :class="{ 'post-user-photo-bg': !selectedForumBoardPost.userPhoto }">
                <img v-if="selectedForumBoardPost.userPhoto" :src="`/img/user-photos/${selectedForumBoardPost.userPhoto}`" alt="User photo">
                <i v-else class="fas fa-user" />
            </div>
            Author
        </div>
    </div>
</template>

<script>
import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

export default {
    name: 'ForumBoardPost',
    data () {
        return {
            forumBoards: getForumBoards()
        };
    },
    computed: {
        selectedForumBoardPost () {
            const board = this.forumBoards[this.$route.params.id];
            if (!board) {
                return {};
            }
            return board.posts[this.$route.params.postId] || {};
        }
    }
};
</script>

<style scoped>
.post-text {
    margin-bottom: 10px;
}
.post-author {

}
</style>
