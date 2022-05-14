<template>
    <div class="post-author">
        <div class="post-user-photo m-10-r" :class="{ 'post-user-photo-bg': !post.userPhoto }">
            <img v-if="post.userPhoto" :src="`/img/user-photos/${post.userPhoto}`" alt="User photo">
            <i v-else class="fas fa-user" />
        </div>
        <div v-if="showAuthorName">
            Author
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostAuthorImageName',
    props: {
        post: {
            type: Object,
            required: true
        },
        showAuthorName: {
            type: Boolean,
            default: true
        }
    }
};
</script>
