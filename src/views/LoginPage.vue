<script setup lang="ts">
import {computed, ref} from "vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import {useRouter} from "vue-router";
import {getUser} from "@/services/user.service";
import {useUserStore} from "@/stores/UserStore";


const email = ref("");
const password = ref("");
const regexEmail = /^[\w][\w0-9_@]{2,14}$/
const errorEmail = computed(() => {
  if (regexEmail.test(email.value) && password.value.length > 0)
    return true
})

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

  <div class="loginCard">
    <div class="login">
      <img class="logo"
           src="/favicon.ico"/>
      <div class="title">Login</div>
      <form>
        <InputText placeholder="Email" v-model="email"/>
        <Password :feedback="false" placeholder="Password" v-model="password" toggleMask/>
        <Button :disabled="!errorEmail">Submit</Button>
      </form>
      <a :href="gitHubURL()">GitHub</a>
    </div>
  </div>
</template>

<style scoped>

.loginCard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title {
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
}

.login {
  padding: 15px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form > * {
  margin-bottom: 15px;
}

button, .logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

form input {
  width: 100%;
}


</style>