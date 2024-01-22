<template>
  <nav-bar></nav-bar>

  <div>
    <div class="grid  m-0">
      <div class="col-4 p-0 ">
        <Suspense>
          <template #default>
            <HistoryList @load-pipeline="(id) => pipelineId = id"/>
          </template>
          <template #fallback>
            <ProgressSpinner class="flex align-items-center"/>
          </template>
        </Suspense>
      </div>
      <div class="col-8 p-0" style="background: var(--surface-700);">
        <Suspense v-if="loadedPipeline">
          <template #default>
            <PipeLineLogDisplay :pipelineId="pipelineId"/>
          </template>
          <template #fallback>
            <ProgressSpinner class="flex align-items-center"/>
          </template>
        </Suspense>
        <div v-else class="p-3 flex align-items-center" style="color: var(--primary-color)">
          <h3>Select a pipeline</h3>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import PipeLineLogDisplay from "../components/PipeLineLogDisplay.vue";
import ProgressSpinner from "primevue/progressspinner";
import {computed, defineAsyncComponent, ref} from "vue";
import NavBar from "../components/NavBar.vue";

const HistoryList = defineAsyncComponent(() => import('../components/HistoryList.vue'));
const pipelineId = ref<string>();

const loadedPipeline = computed(() => pipelineId.value !== undefined && pipelineId.value !== "");
</script>


<style scoped>

</style>