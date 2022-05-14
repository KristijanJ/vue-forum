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
    },
    filteredSearchPosts (state, getters) {
        if (!state.postSearchValue) {
            return getters.latestPosts;
        }
        return getters.latestPosts.filter((post) => {
            return (
                post.title.toLowerCase().includes(state.postSearchValue.toLowerCase()) ||
                post.text.toLowerCase().includes(state.postSearchValue.toLowerCase())
            );
        });
    }
};
