<template>
    <div class="forum-board-wrapper">
        <div class="forum-board-icon m-10-r">
            <i :class="forumBoard.icon" />
        </div>

        <div class="forum-board-info">
            <router-link :to="`/board/${forumBoard.id}`" class="forum-board-title">
                {{ forumBoard.title }}
            </router-link>
            <div class="forum-board-description">
                {{ forumBoard.description }}
            </div>
        </div>

        <div class="forum-board-data">
            <div class="forum-board-data-item">
                <span class="forum-board-data-item-num">{{ forumBoard.posts.length }}</span>
                <span class="forum-board-data-item-text">posts</span>
            </div>
        </div>

        <div class="forum-board-separator" />

        <div class="forum-board-latest-post line-clamp">
            <div v-if="forumBoard.posts.length">
                <router-link :to="`/board/${forumBoard.id}/post/${latestPost.id}`">
                    {{ latestPost.title }}
                </router-link>
            </div>
            <div v-else>
                No new posts
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForumBoard',
    props: {
        forumBoard: {
            type: Object,
            required: true
        }
    },
    computed: {
        iconColor () {
            return this.forumBoard.iconColor;
        },
        latestPost () {
            if (!this.forumBoard.posts.length) {
                return null;
            }
            return this.forumBoard.posts[this.forumBoard.posts.length - 1];
        }
    }
};
</script>

<style scoped>
.forum-board-wrapper {
    display: flex;
    align-items: center;
}
.forum-board-icon {
    background: v-bind(iconColor);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: #ffffff;
}
.forum-board-title {
    font-weight: 500;
    color: #2c3e50;
}
.forum-board-description {
    font-size: 12px;
}
.forum-board-data {
    display: flex;
    margin-left: auto;
    font-size: 14px;
}
.forum-board-data-item {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.forum-board-separator {
    height: 50px;
    width: 5px;
    border-radius: 2px;
    background: v-bind(iconColor);
    margin: 0 20px;
}
.forum-board-latest-post {
    font-size: 14px;
    flex: 0 0 120px;
    overflow: hidden;
}
.forum-board-latest-post a {
    color: #2c3e50;
}

@media screen and (max-width: 480px) {
    .forum-board-data {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .forum-board-separator,
    .forum-board-latest-post {
        display: none;
    }
}
</style>
