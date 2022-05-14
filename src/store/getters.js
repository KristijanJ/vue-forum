export default {
    latestPosts (state) {
        let posts = [];
        state.forumBoards.forEach(board => {
            posts = [
                ...posts,
                ...board.posts
            ];
        });
        return posts.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
    }
};
