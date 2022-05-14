<template>
    <div class="container">
        <div class="page-header">
            Latest posts
        </div>
        <template v-for="(latestPost, i) in latestPosts" :key="i">
            <div
                v-for="(post, index) in latestPost.posts"
                :key="index"
                class="post"
            >
                <div class="post-user-photo m-10-r" :class="{ 'post-user-photo-bg': !post.userPhoto }">
                    <img v-if="post.userPhoto" :src="`/img/user-photos/${post.userPhoto}`" alt="User photo">
                    <i v-else class="fas fa-user" />
                </div>
                <div class="post-info">
                    <router-link :to="`/board/${latestPost.board}/post/${post.id}`" class="post-text">
                        {{ post.title }}
                    </router-link>
                    <div class="post-text-preview">
                        {{ post.text.substring(0, 100) + '...' }}
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { getLatestPosts } from '../assets/mocks/forumBoardsMockData';

export default {
    name: 'LatestPostsPage',
    data () {
        return {
            latestPosts: getLatestPosts()
        };
    }
};
</script>

<style>

</style>
