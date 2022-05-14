<template>
    <div class="container">
        <div class="page-nav-back">
            <router-link :to="`/board/${$route.params.id}`">
                <i class="fas fa-angle-left" /> Back
            </router-link>
        </div>
        <post-view :post="selectedForumBoardPost" />

        <div class="post-comments-title">
            <div class="m-30-b">
                Comments
            </div>
            <comment-add-new-to-post :board-id="$route.params.id" :post-id="selectedForumBoardPost.id" />
        </div>
        <post-comment
            v-for="(comment, index) in selectedForumBoardPost.comments"
            :key="index"
            :post-comment="comment"
            :post="selectedForumBoardPost"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import PostView from '../components/PostView.vue';
import PostComment from '../components/PostComment.vue';
import CommentAddNewToPost from '../components/CommentAddNewToPost.vue';

export default {
    name: 'ForumBoardPost',
    components: {
        PostView,
        PostComment,
        CommentAddNewToPost
    },
    computed: {
        ...mapState([
            'forumBoards'
        ]),
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
