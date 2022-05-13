<template>
    <div class="nav-bar-wrapper">
        <div v-for="i in 7" :key="i" class="nav-bar-element">
            <i class="fas fa-paper-plane" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
};
</script>

<style>
.nav-bar-wrapper {
    display: flex;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 20px;
}
.nav-bar-element {
    padding: 10px;
}
</style>
