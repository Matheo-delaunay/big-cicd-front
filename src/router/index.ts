import {createRouter, createWebHistory} from "vue-router";
import type RouteRecordRaw from "vue-router";

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/LoginPage.vue")
    },
    {
        path: "/pipeline/:id",
        name: "PipeLineLog",
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