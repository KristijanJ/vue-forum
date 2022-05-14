import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import ForumBoardPage from './pages/ForumBoardPage.vue';
import ForumBoardPost from './pages/ForumBoardPost.vue';

const app = createApp(App);

const routes = [
    { path: '/', component: HomePage },
    { path: '/board/:id', component: ForumBoardPage },
    { path: '/board/:id/post/:postId', component: ForumBoardPost }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router);
app.mount('#app');
