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
import {defineAsyncComponent} from "vue";
import ProgressSpinner from "primevue/progressspinner";

const userStore = useUserStore()
const LoginPage = defineAsyncComponent(() => import('./views/LoginPage.vue'));

</script>