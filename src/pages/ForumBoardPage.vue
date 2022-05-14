<template>
    <div class="container">
        <div class="page-header">
            <span>{{ selectedForumBoard.title }}</span>
            <button class="btn m-auto-l">
                <i class="fas fa-plus m-5-r" /> Add new post
            </button>
        </div>
        <post-preview
            v-for="(post, index) in selectedForumBoard.posts"
            :key="index"
            :post="post"
            :board-id="$route.params.id"
        />
    </div>
</template>

<script>
import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

import PostPreview from '../components/PostPreview.vue';

export default {
    name: 'ForumBoardPage',
    components: {
        PostPreview
    },
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
    display: flex;
    align-items: center;
}
.post-info > a {
    color: #2c3e50;
    font-weight: 500;
}
</style>
