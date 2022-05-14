<template>
    <div class="page-header">
        {{ post.title }}
    </div>
    <div class="post-text">
        {{ post.text }}
    </div>
    <post-author-image-name :post="post" show-small-photo />
</template>

<script>
import PostAuthorImageName from './PostAuthorImageName.vue';

export default {
    name: 'PostView',
    components: {
        PostAuthorImageName
    },
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
