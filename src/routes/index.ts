import {createRouter, createWebHistory} from "vue-router";
import PipelineHistoryPage from "../views/PipelineHistoryPage.vue";
import {useUserStore} from "../stores/UserStore";
import {getAccessToken, getUserInfo} from "../services/github.service";
import LoginPage from "../views/LoginPage.vue";


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
            const accessToken = await getAccessToken(code);
            userStore.accessToken = accessToken.access_token;
            const userInfo = await getUserInfo(accessToken.access_token);
            userStore.id = userInfo.id;
        }else if (to.path !== "/login") {
            return "/login";
        }
    }
});

export default router;