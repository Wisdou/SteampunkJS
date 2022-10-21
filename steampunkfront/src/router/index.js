import { createWebHistory, createRouter } from "vue-router";
import MainPage from '../components/MainPage.vue';
import TourusPuzzle from '../components/TourusPuzzle.vue';
import Sudoku from '../components/Sudoku.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;