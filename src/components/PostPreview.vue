<template>
    <div class="post">
        <post-author-image-name :author-photo="post.userPhoto" :show-author-name="false" />
        <div class="post-info">
            <router-link :to="`/board/${boardId}/post/${post.id}`" class="post-text">
                {{ post.title }}
            </router-link>
            <div class="post-text-preview">
                {{ post.text.substring(0, 100) + '...' }}
            </div>
        </div>
    </div>
</template>

<script>
import PostAuthorImageName from './PostAuthorImageName.vue';

export default {
    name: 'PostPreview',
    components: {
        PostAuthorImageName
    },
    props: {
        post: {
            type: Object,
            required: true
        },
        boardId: {
            type: [Number, String],
            required: true
        }
    }
};
</script>

<style>
.post {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
}
.post-info > a {
    color: #2c3e50;
    font-weight: 500;
}
</style>
