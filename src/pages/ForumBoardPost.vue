<template>
    <div class="container">
        <div class="page-nav-back">
            <router-link :to="`/board/${$route.params.id}`">
                <i class="fas fa-angle-left" /> Back
            </router-link>
        </div>
        <post-view :post="selectedForumBoardPost" />
    </div>
</template>

<script>
import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

import PostView from '../components/PostView.vue';

export default {
    name: 'ForumBoardPost',
    components: {
        PostView
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
