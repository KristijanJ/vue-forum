<template>
    <div class="post-author">
        <div
            class="post-user-photo m-10-r"
            :class="{ 'post-user-photo-bg': !authorPhoto, 'photo-small': showSmallPhoto }"
        >
            <img v-if="authorPhoto" :src="`/img/user-photos/${authorPhoto}`" alt="User photo">
            <i v-else class="fas fa-user" />
        </div>
        <div v-if="showAuthorName">
            {{ authorName }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostAuthorImageName',
    props: {
        authorPhoto: {
            type: String,
            default: ''
        },
        authorName: {
            type: String,
            default: 'Admin'
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
    width: 30px;
    height: 30px;
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
