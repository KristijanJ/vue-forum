<template>
    <div class="container">
        <div class="page-header">
            Latest posts
        </div>
        <template v-for="(latestPost, i) in latestPosts" :key="i">
            <post-preview
                v-for="(post, index) in latestPost.posts"
                :key="index"
                :post="post"
                :board-id="latestPost.board"
            />
        </template>
    </div>
</template>

<script>
import { getLatestPosts } from '../assets/mocks/forumBoardsMockData';

import PostPreview from '../components/PostPreview.vue';

export default {
    name: 'LatestPostsPage',
    components: {
        PostPreview
    },
    data () {
        return {
            latestPosts: getLatestPosts()
        };
    }
};
</script>

<style>

</style>
