import {createRouter, createWebHistory} from "vue-router";
import PipelineHistoryPage from "../views/PipelineHistoryPage.vue";
import {useUserStore} from "../stores/UserStore";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PipelineHistoryPage }
    ]
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (userStore.isLoggedIn) {
        next();
    } else {
        const code = to.query.code;

        if (code) {
            userStore.accessToken = code as string;
            next();
        }
    }
});

export default router;