import { createStore } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import { getForumBoards } from '../assets/mocks/forumBoardsMockData';

export default createStore({
    state: {
        forumBoards: getForumBoards()
    },
    actions,
    mutations,
    getters
});
