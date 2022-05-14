<template>
    <div class="container">
        <div class="page-nav-back">
            <router-link :to="`/board/${$route.params.id}`">
                <i class="fas fa-angle-left" /> Back
            </router-link>
        </div>
        <post-view :post="selectedForumBoardPost" />
        <div v-if="selectedForumBoardPost.comments.length" class="post-comment-wrapper">
            <post-comment
                v-for="(comment, index) in selectedForumBoardPost.comments"
                :key="index"
                :post-comment="comment"
            />
        </div>
    </div>
</template>

<script>
import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

import PostView from '../components/PostView.vue';
import PostComment from '../components/PostComment.vue';

export default {
    name: 'ForumBoardPost',
    components: {
        PostView,
        PostComment
    },
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
.post-comment-wrapper {
    margin-top: 30px;
    border-top: 1px solid #cccccc;
}
</style>
