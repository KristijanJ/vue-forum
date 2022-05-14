<template>
    <div class="page-header">
        <span>{{ post.title }}</span>
        <span class="m-auto-l">{{ formattedCreatedAt }}</span>
    </div>
    <div class="post-text">
        {{ post.text }}
    </div>
    <post-author-image-name :author-photo="post.userPhoto" show-small-photo />
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
    },
    computed: {
        formattedCreatedAt () {
            console.log(this.post.createdAt);
            const date = new Date(this.post.createdAt);
            return date.toISOString().split('T')[0];
        }
    }
};
</script>

<style scoped>
.post-text {
    margin-bottom: 20px;
}
</style>
