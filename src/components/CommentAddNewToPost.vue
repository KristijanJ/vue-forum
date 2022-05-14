<template>
    <div class="form-group" :class="{ 'form-group-error': newComment.error }">
        <label class="add-new-comment-label" for="post-text">
            Add new comment
            <button class="btn m-auto-l" @click="handleAddNewCommentToPost">Add</button>
        </label>
        <textarea
            id="post-text"
            v-model="newComment.value"
            name="post-text"
            rows="3"
            @input="newComment.error = false"
        />
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'CommentAddNewToPost',
    props: {
        boardId: {
            type: [Number, String],
            required: true
        },
        postId: {
            type: [Number, String],
            required: true
        }
    },
    data () {
        return {
            newComment: {
                value: '',
                error: false
            }
        };
    },
    methods: {
        ...mapMutations([
            'addNewCommentToPost'
        ]),
        handleAddNewCommentToPost () {
            if (!this.newComment.value.trim()) {
                return;
            }
            this.addNewCommentToPost({
                boardId: this.boardId,
                postId: this.postId,
                newComment: {
                    text: this.newComment.value
                }
            });
            this.newComment = {
                value: '',
                error: false
            };
        }
    }
};
</script>

<style scoped>
.add-new-comment-label {
    display: flex;
    align-items: center;
}
</style>
