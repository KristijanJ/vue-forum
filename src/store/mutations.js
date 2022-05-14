export default {
    addNewPostToBoard (state, data) {
        const newPost = {
            ...data.newPost,
            id: state.forumBoards[data.boardId].posts.length,
            userPhoto: '',
            comments: []
        };
        state.forumBoards[data.boardId].posts.push(newPost);
    },
    addNewCommentToPost (state, data) {
        const newComment = {
            ...data.newComment,
            id: state.forumBoards[data.boardId].posts[data.postId].comments.length,
            author: {
                name: 'New user',
                userPhoto: 'user_three.jpg'
            }
        };
        state.forumBoards[data.boardId].posts[data.postId].comments.push(newComment);
    }
};
