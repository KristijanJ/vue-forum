<template>
    <post-author-image-name :post="post" show-small-photo />
</template>

<script>
import PostAuthorImageName from './PostAuthorImageName.vue';

export default {
    name: 'PostComment',
    components: {
        PostAuthorImageName
    },
    props: {
        post: {
            type: Object,
            required: true
        },
        postComment: {
            type: Object,
            required: true
        }
    }
};
</script>

<style>

</style>
