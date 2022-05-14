export default {
    addNewPostToBoard (state, data) {
        const newPost = {
            ...data.newPost,
            id: state.forumBoards[data.boardId].posts.length,
            userPhoto: '',
            comments: []
        };
        state.forumBoards[data.boardId].posts.push(newPost);
    }
};
