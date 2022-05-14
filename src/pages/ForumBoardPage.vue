<template>
    <div class="container">
        <div class="page-header">
            {{ selectedForumBoard.title }}
        </div>
        <div
            v-for="(post, index) in selectedForumBoard.posts"
            :key="index"
            class="post"
        >
            <div class="post-user-photo m-10-r" :class="{ 'post-user-photo-bg': !post.userPhoto }">
                <img v-if="post.userPhoto" :src="`/img/user-photos/${post.userPhoto}`" alt="User photo">
                <i v-else class="fas fa-user" />
            </div>
            <div class="post-info">
                <router-link :to="`/board/${$route.params.id}/post/${post.id}`" class="post-text">
                    {{ post.title }}
                </router-link>
                <div class="post-text-preview">
                    {{ post.text.substring(0, 100) + '...' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

export default {
    name: 'ForumBoardPage',
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
.post-user-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: #000000;
}
.post-user-photo-bg {
    background: #eeeeee;
}
.post-user-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
</style>
