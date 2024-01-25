import {createRouter, createWebHistory} from "vue-router";
import PipelineHistoryPage from "../views/PipelineHistoryPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: PipelineHistoryPage},
        {path: '/test', component: PipelineHistoryPage},
    ]
});

export default router;