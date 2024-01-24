import {createRouter, createWebHistory} from "vue-router";
import PipelineHistoryPage from "../views/PipelineHistoryPage.vue";
import {useUserStore} from "../stores/UserStore";
import LoginPage from "../views/LoginPage.vue";
import {getUser} from "../services/user.service";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PipelineHistoryPage },
        { path: '/login', component: LoginPage }
    ]
});

router.beforeEach(async (to, from) => {
    const userStore = useUserStore();
    if (!userStore.isLoggedIn) {
        const code : string = to.query.code as string;
        if (code) {
            const user = await getUser(code)
            userStore.accessToken = user.accessToken;
            userStore.id = user.id;
            return "/";
        }else if (to.path !== "/login") {
            return "/login";
        }
    }
});

export default router;