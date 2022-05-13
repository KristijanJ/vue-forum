<template>
    <div class="forum-board-wrapper">
        <div class="forum-board-icon m-10-r">
            <i class="fas fa-paper-plane" />
        </div>

        <div class="forum-board-info">
            <div class="forum-board-title">
                Announcements
            </div>
            <div class="forum-board-description">
                Announcements regarding our community
            </div>
        </div>

        <div class="forum-board-data">
            <div class="forum-board-data-item m-10-r">
                <span class="forum-board-data-item-num">0</span>
                <span class="forum-board-data-item-text">topics</span>
            </div>
            <div class="forum-board-data-item">
                <span class="forum-board-data-item-num">0</span>
                <span class="forum-board-data-item-text">posts</span>
            </div>
        </div>

        <div class="forum-board-separator" />

        <div class="forum-board-latest-post">
            No new posts
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForumBoard'
};
</script>

<style>
.forum-board-wrapper {
    display: flex;
    align-items: center;
}
.forum-board-icon {
    background: #eeca82;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 50%;
    color: #ffffff;
}
.forum-board-title {
    font-weight: 500;
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
    background: #eeca82;
    margin: 0 20px;
}
.forum-board-latest-post {
    font-size: 14px;
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
