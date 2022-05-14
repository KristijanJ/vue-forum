<template>
    <div class="nav-bar-wrapper">
        <div class="nav-bar-left">
            <div class="nav-bar-element">
                <router-link to="/">
                    <span>ForumVue</span>
                </router-link>
            </div>
            <div v-for="(link, index) in links" :key="index" class="nav-bar-element">
                <router-link :to="link.route">
                    <i :class="link.icon" />
                </router-link>
            </div>
        </div>
        <div class="nav-bar-">
            <div class="nav-bar-element">
                <i class="fas fa-user m-10-r" /> John Smith
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
        return {
            links: [
                {
                    title: 'Home',
                    icon: 'fas fa-home',
                    route: '/'
                },
                {
                    title: 'Latest Posts',
                    icon: 'fas fa-bars',
                    route: '/latest-posts'
                },
                {
                    title: 'Search',
                    icon: 'fas fa-search',
                    route: '/search'
                }
            ]
        };
    }
};
</script>

<style scoped>
.nav-bar-wrapper {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 20px;
}
.nav-bar-left {
    display: flex;
}
.nav-bar-element {
    padding: 10px;
}
.nav-bar-element > a {
    color: #2c3e50;
    text-decoration: none;
}
</style>
