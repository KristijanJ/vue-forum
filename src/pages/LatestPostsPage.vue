<template>
    <div class="container">
        <div class="page-header">
            Latest posts
        </div>
        <post-preview
            v-for="(post, index) in latestPosts"
            :key="index"
            :post="post"
            :board-id="post.boardId"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PostPreview from '../components/PostPreview.vue';

export default {
    name: 'LatestPostsPage',
    components: {
        PostPreview
    },
    computed: {
        ...mapGetters([
            'latestPosts'
        ])
    }
};
</script>

<style>

</style>
