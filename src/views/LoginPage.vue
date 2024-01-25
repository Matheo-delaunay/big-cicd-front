<script setup lang="ts">
import Button from 'primevue/button';
import {useRouter} from "vue-router";
import {getUser} from "../services/user.service";
import {useUserStore} from "../stores/UserStore";


const gitHubURL = () => {
  const rootURl = `${import.meta.env.VITE_GITHUB}/login/oauth/authorize`;

  const params = {
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_CICD_FRONT,
    scope: "read:user",
    state: import.meta.env.VITE_GITHUB_STATE,
  };

  const urlSearchParams = new URLSearchParams(params);

  return `${rootURl}?${urlSearchParams.toString()}`;
}

const logUser = async () => {
  const router = useRouter();
  await router.isReady();
  const code = router.currentRoute.value.query.code as string;
  if (code) {
    const user = await getUser(code);
    const userStore = useUserStore();
    userStore.accessToken = user.accessToken;
    userStore.id = user.id;
    await router.push('/');
  }
}

await logUser()
</script>

<template>
  <div class="flex justify-content-center align-items-center" style="height: 100vh">
  <div class="loginCard flex align-items-center justify-content-center p-6"   >
    <div class="login border-round p-6 pl-8 pr-8" style="background-color: white">
      <img class="logo m-auto pb-3 block" src="/favicon.ico"/>
      <div class="title block m-auto pb-3" style="font-size: 1.8rem;">Login</div>
      <a :href="gitHubURL()">
        <Button class="block m-auto" icon="pi pi-github"></Button>
      </a>
    </div>
  </div>
  </div>
</template>

<style scoped>


</style>