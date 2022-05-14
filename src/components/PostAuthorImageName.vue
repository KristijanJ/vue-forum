<template>
    <div class="post-author">
        <div
            class="post-user-photo m-10-r"
            :class="{ 'post-user-photo-bg': !post.userPhoto, 'photo-small': showSmallPhoto }"
        >
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
        },
        showSmallPhoto: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
.post-author {
    display: flex;
    align-items: center;
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
.post-user-photo.photo-small {
    width: 25px;
    height: 25px;
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
