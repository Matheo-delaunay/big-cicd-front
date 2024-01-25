import {createRouter, createWebHistory} from "vue-router";
import type RouteRecordRaw from "vue-router";

const routes: Array<RouteRecordRaw.RouteRecordRaw> = [
    {
        path: "/pipeline",
        name: 'pipeline',
        component: () => import("../views/PipelineHistoryPage.vue")
    },
    {
        path: "/",
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