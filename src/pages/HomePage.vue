<template>
    <div class="container">
        <div class="page-header">
            CATEGORIES
        </div>
        <forum-board
            v-for="(forumBoard, index) in forumBoards"
            :key="index"
            class="m-30-b"
            :forum-board="forumBoard"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import ForumBoard from '../components/ForumBoard.vue';

export default {
    name: 'HomePage',
    components: {
        ForumBoard
    },
    computed: {
        ...mapState([
            'forumBoards'
        ])
    }
};
</script>
