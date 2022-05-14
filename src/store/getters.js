export default {
    latestPosts (state) {
        let posts = [];
        state.forumBoards.forEach(board => {
            posts = [
                ...posts,
                ...board.posts
            ];
        });
        return posts;
    }
};
