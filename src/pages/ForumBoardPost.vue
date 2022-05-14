<template>
    <div class="container">
        <div class="page-header">
            {{ selectedForumBoardPost.text }}
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

</style>
