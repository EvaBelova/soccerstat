import { createWebHistory, createRouter } from "vue-router";
import LeagueListView from "../views/LeagueList.vue";
import TeamListView from "../views/TeamList.vue";

const routes = [
    {
        path: "/",
        component: LeagueListView
    },
    {
        path: "/teams",
        component: TeamListView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;