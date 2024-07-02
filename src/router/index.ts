import { createWebHistory, createRouter } from "vue-router";
import LeagueListView from "../views/Leagues/Index.vue"; 
import LeagueDetailView from "../views/Leagues/Detail.vue"
import TeamListView from "../views/Teams/Index.vue";
import TeamDetailView from "../views/Teams/Details.vue";

const routes = [
    {
        path: "/",
        name: "leaguesList",
        component: LeagueListView
    },
    {
        path: "/:id",
        name: "leaguesDetail",
        component: LeagueDetailView
    },
    {
        path: "/teams",
        name: "teamsList",
        component: TeamListView  
    },
    {
        path: "/teams/:id",
        name: "teamsDetail",
        component: TeamDetailView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;