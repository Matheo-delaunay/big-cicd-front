import {createRouter, createWebHistory} from "vue-router";
import PipelineHistoryPage from "../views/PipelineHistoryPage.vue";
import {useUserStore} from "../stores/UserStore";
import LoginPage from "../views/LoginPage.vue";
import {getUser} from "../services/user.service";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PipelineHistoryPage },
        { path: '/test', component: PipelineHistoryPage },
    ]
});

export default router;