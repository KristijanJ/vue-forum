<template>
    <div class="nav-bar-wrapper">
        <div class="nav-bar-left">
            <div class="nav-bar-element">
                <span>ForumVue</span>
            </div>
            <div v-for="(link, index) in links" :key="index" class="nav-bar-element">
                <i :class="link.icon" />
            </div>
        </div>
        <div class="nav-bar-">
            <div class="nav-bar-element">
                <button class="btn">
                    Sign Up
                </button>
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
                    icon: 'fas fa-home'
                },
                {
                    title: 'Latest Posts',
                    icon: 'fas fa-bars'
                },
                {
                    title: 'Search',
                    icon: 'fas fa-search'
                }
            ]
        };
    }
};
</script>

<style>
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
.nav-bar-element > * {
    cursor: pointer;
}
</style>
