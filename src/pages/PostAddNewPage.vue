<template>
    <div class="container">
        <div class="form-group">
            <label for="post-title">Post title</label>
            <input id="post-title" type="text" name="post-title">
        </div>

        <div class="form-group">
            <label for="post-text">Post text</label>
            <textarea
                id="post-text"
                name="post-text"
                cols="30"
                rows="10"
            />
        </div>

        <div class="form-group form-group-center">
            <button class="btn" @click="handleAddNewPost">
                Add new post
            </button>
        </div>
    </div>
</template>

<script>
import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

export default {
    name: 'PosAddNewPage',
    data () {
        return {
            forumBoards: getForumBoards()
        };
    },
    methods: {
        handleAddNewPost () {
            const boardId = this.$route.params.id;
            const currentBoard = this.forumBoards[boardId];
            console.log(currentBoard);
        }
    }
};
</script>

<style>

</style>
