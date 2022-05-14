<template>
    <div class="page-header">
        {{ post.title }}
    </div>
    <div class="post-text">
        {{ post.text }}
    </div>
    <div class="post-author">
        <div class="post-user-photo m-10-r" :class="{ 'post-user-photo-bg': !post.userPhoto }">
            <img v-if="post.userPhoto" :src="`/img/user-photos/${post.userPhoto}`" alt="User photo">
            <i v-else class="fas fa-user" />
        </div>
        Author
    </div>
</template>

<script>
export default {
    name: 'PostView',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.post-text {
    margin-bottom: 10px;
}
</style>
