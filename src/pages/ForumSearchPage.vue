<template>
    <div class="container">
        <div class="form-group">
            <label class="search-label" for="search-post">
                <span>Search</span>
                <button class="btn m-auto-l" @click="handleSearchPosts">
                    <i class="fas fa-search" />
                </button>
            </label>
            <input
                id="search-post"
                v-model="localSearchValue"
                type="text"
                name="search-post"
                @input="handleSearchPosts"
            >
        </div>
        <post-preview
            v-for="(post, index) in filteredSearchPosts"
            :key="index"
            :post="post"
            :board-id="post.boardId"
        />
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import PostPreview from '../components/PostPreview.vue';

export default {
    name: 'ForumSearchPage',
    components: {
        PostPreview
    },
    data () {
        return {
            localSearchValue: ''
        };
    },
    computed: {
        ...mapState(['postSearchValue']),
        ...mapGetters(['filteredSearchPosts'])
    },
    mounted () {
        this.localSearchValue = this.postSearchValue;
    },
    methods: {
        ...mapMutations([
            'setPostSearchValue'
        ]),
        handleSearchPosts () {
            this.setPostSearchValue(this.localSearchValue);
        }
    }
};
</script>

<style scoped>
.search-label {
    display: flex;
    align-items: center;
}
</style>
