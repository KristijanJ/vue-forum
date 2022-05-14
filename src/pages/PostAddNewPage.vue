<template>
    <div class="container container-boxed">
        <div class="form-group" :class="{ 'form-group-error': newPost.title.error }">
            <label for="post-title">Post title *</label>
            <input
                id="post-title"
                v-model="newPost.title.value"
                type="text"
                name="post-title"
                @input="newPost.title.error = false"
            >
        </div>

        <div class="form-group" :class="{ 'form-group-error': newPost.text.error }">
            <label for="post-text">Post text *</label>
            <textarea
                id="post-text"
                v-model="newPost.text.value"
                name="post-text"
                cols="30"
                rows="10"
                @input="newPost.text.error = false"
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
                title: {
                    value: '',
                    error: false
                },
                text: {
                    value: '',
                    error: false
                }
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
            this.resetNewPostErrors();
            if (!this.validateForm()) {
                return;
            }
            const boardId = this.$route.params.id;
            const newPost = {
                title: this.newPost.title.value,
                text: this.newPost.text.value
            };
            this.addNewPostToBoard({ boardId, newPost });
            this.$router.back();
        },
        validateForm () {
            let valid = true;
            if (!this.newPost.title.value.trim()) {
                this.newPost.title.error = true;
                valid = false;
            }
            if (!this.newPost.text.value.trim()) {
                this.newPost.text.error = true;
                valid = false;
            }
            return valid;
        },
        resetNewPostValues () {
            this.newPost.title.value = '';
            this.newPost.text.value = '';
        },
        resetNewPostErrors () {
            this.newPost.title.error = false;
            this.newPost.text.error = false;
        }
    }
};
</script>
