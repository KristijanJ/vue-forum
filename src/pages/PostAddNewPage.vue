<template>
    <div class="container">
        <div class="form-group">
            <label for="post-title">Post title</label>
            <input
                id="post-title"
                v-model="newPost.title"
                type="text"
                name="post-title"
            >
        </div>

        <div class="form-group">
            <label for="post-text">Post text</label>
            <textarea
                id="post-text"
                v-model="newPost.text"
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
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'PosAddNewPage',
    data () {
        return {
            newPost: {
                title: '',
                text: ''
            }
        };
    },
    computed: {
        ...mapState([
            'forumBoards'
        ])
    },
    methods: {
        ...mapMutations([
            'addNewPostToBoard'
        ]),
        handleAddNewPost () {
            const boardId = this.$route.params.id;
            this.addNewPostToBoard({ boardId, newPost: this.newPost });
            this.newPost = {
                title: '',
                text: ''
            };
        }
    }
};
</script>
