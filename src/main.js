import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import store from './store';

import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import ForumBoardPage from './pages/ForumBoardPage.vue';
import ForumBoardPost from './pages/ForumBoardPost.vue';
import LatestPostsPage from './pages/LatestPostsPage.vue';
import PostAddNewPage from './pages/PostAddNewPage.vue';
import ForumSearchPage from './pages/ForumSearchPage.vue';

const app = createApp(App);

const routes = [
    { path: '/', component: HomePage },
    { path: '/board/:id', component: ForumBoardPage },
    { path: '/board/:id/post/:postId', component: ForumBoardPost },
    { path: '/latest-posts', component: LatestPostsPage },
    { path: '/board/:id/add-new', component: PostAddNewPage },
    { path: '/search', component: ForumSearchPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router);
app.use(store);
app.mount('#app');
