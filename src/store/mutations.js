export default {
    addNewPostToBoard (state, data) {
        const newPost = {
            ...data.newPost,
            id: state.forumBoards[data.boardId].posts.length,
            createdAt: new Date().toISOString().split('T')[0],
            userPhoto: '',
            boardId: data.boardId,
            comments: []
        };
        state.forumBoards[data.boardId].posts.push(newPost);
    },
    addNewCommentToPost (state, data) {
        const newComment = {
            ...data.newComment,
            id: state.forumBoards[data.boardId].posts[data.postId].comments.length,
            author: {
                name: `guest#${Math.floor(1000 + Math.random() * 9000)}`,
                userPhoto: ''
            }
        };
        state.forumBoards[data.boardId].posts[data.postId].comments.push(newComment);
    },
    setPostSearchValue (state, data) {
        state.postSearchValue = data;
    }
};
