import {createRouter, createWebHistory} from "vue-router";
import type RouteRecordRaw from "vue-router";

const routes: Array<RouteRecordRaw.RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/PipelineHistoryPage.vue")
    },
    {
        path: "/pipeline",
        name: 'pipeline',
        component: () => import("../views/PipelineHistoryPage.vue")
    },
    {
        path: "/launcher",
        name: "launcher",
        component: () => import("../views/LaunchPage.vue")
    },

];

export {routes};

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;