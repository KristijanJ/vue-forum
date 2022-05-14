<template>
    <div class="container">
        <div class="page-nav-back">
            <router-link :to="`/board/${$route.params.id}`">
                <i class="fas fa-angle-left" /> Back
            </router-link>
        </div>
        <post-view :post="selectedForumBoardPost" />
        <div v-if="selectedForumBoardPost.comments.length">
            <div class="post-comments-title">
                Comments
            </div>
            <post-comment
                v-for="(comment, index) in selectedForumBoardPost.comments"
                :key="index"
                :post-comment="comment"
                :post="selectedForumBoardPost"
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
.post-comments-title {
    margin-top: 30px;
    padding-top: 20px;
    text-transform: uppercase;
    border-top: 1px solid #cccccc;
}
</style>
