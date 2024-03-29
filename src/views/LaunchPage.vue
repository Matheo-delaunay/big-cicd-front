<script setup lang="ts">
import {computed, defineAsyncComponent, ref} from 'vue';
import NavBar from "../components/NavBar.vue";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import {getTags} from "../services/registry.service";
import {startDeployment} from "../services/pipeline.service";
import {useUserStore} from "../stores/UserStore";

const LaunchDropdown = defineAsyncComponent(() => import('../components/LaunchDropdown.vue'));
const repositories = async () => ['imt-framework-back', 'imt-framework-front'];
const repository = ref<string>();
const tag = ref<string>();
const isLoading = ref<boolean>(false);
import router from "../router";
const userStore = useUserStore()
const tags = computed(async () => {
    return await getTags(repository.value!)
} )

const isButtonShown = computed(() => repository.value != null && tag.value != null);
const startCd = async () => {
  isLoading.value = true;
  if (!isButtonShown.value) {
    isLoading.value = false;
    return;
  }
  startDeployment(repository.value!, tag.value!, userStore.id ?? 0).then(
      (id: string) => {
          router.push({name: 'pipeline', query: {id: id}});
      }
  );
};

</script>

<template>
  <nav-bar/>
  <div class="card flex justify-content-center">
    <form class="flex flex-column gap-4">
      <Suspense>
        <template #default>
          <LaunchDropdown :label="'Select your branch'" :options="repositories()"
                          @value="(event) => repository = event"/>
        </template>
        <template #fallback>
          <ProgressSpinner class="flex align-items-center"/>
        </template>
      </Suspense>
      <Suspense v-if="repository != null">
        <template #default>
          <LaunchDropdown :label="'Select your version'" :options="tags"
                          @value="(event) => tag = event"/>
        </template>
        <template #fallback>
          <ProgressSpinner class="flex align-items-center"/>
        </template>
      </Suspense>
      <Button v-if="isButtonShown" type="button" label="Launch" icon="pi pi-arrow-circle-up"
              :loading="isLoading" @click="startCd"/>
    </form>
  </div>
</template>

<style scoped>
.card {
  margin-top: 30vh;
}

body {
  background-color: var(--surface-700);
}
</style>