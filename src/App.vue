<template>
  <div v-if="userStore.isLoggedIn">
    <RouterView/>
  </div>
  <div v-else>
    <Suspense>
      <template #default>
        <LoginPage/>
      </template>
      <template #fallback>
        <ProgressSpinner class="flex align-items-center"/>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router";
import {useUserStore} from "./stores/UserStore";
import {getUser} from "./services/user.service";
import {defineAsyncComponent} from "vue";
import ProgressSpinner from "primevue/progressspinner";

const userStore = useUserStore()
const LoginPage = defineAsyncComponent(() => import('./views/LoginPage.vue'));

console.log(userStore.isLoggedIn)
console.log(userStore.id)

</script>