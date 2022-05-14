<template>
    <div class="post-comment-wrapper">
        <post-author-image-name :author-photo="authorPhoto" :author-name="authorName" show-small-photo />
        <div class="post-comment-text">
            {{ postComment.text }}
        </div>
    </div>
</template>

<script>
import PostAuthorImageName from './PostAuthorImageName.vue';

export default {
    name: 'PostComment',
    components: {
        PostAuthorImageName
    },
    props: {
        postComment: {
            type: Object,
            required: true
        }
    },
    computed: {
        authorPhoto () {
            return this.postComment.author ? this.postComment.author.userPhoto : '';
        },
        authorName () {
            return this.postComment.author ? this.postComment.author.name : '';
        }
    }
};
</script>

<style scoped>
.post-comment-wrapper {
    padding: 20px 0;
}
.post-comment-text {
    border-left: 1px solid #cccccc;
    margin: 20px;
    padding-left: 20px;
}
</style>
