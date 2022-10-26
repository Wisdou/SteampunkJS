import { createWebHistory, createRouter } from "vue-router";
import MainPage from '../components/MainPage.vue';
import TourusPuzzle from '../components/TourusPuzzle.vue';
import Sudoku from '../components/Sudoku.vue';
import Forum from '../components/Forum.vue';
import Profile from '../components/Profile.vue';
import Leaderboard from '../components/Leaderboard.vue';

const routes = [{
        path: "/",
        name: "Home",
        component: MainPage,
    },
    {
        path: "/Sudoku",
        name: "Sudoku",
        component: Sudoku,
    },
    {
        path: "/Tourus",
        name: "Tourus",
        component: TourusPuzzle,
    },
    {
        path: "/Forum",
        name: "Forum",
        component: Forum,
    },
    {
        path: "/Profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/Leaderboard",
        name: "Leaderboard",
        component: Leaderboard,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;