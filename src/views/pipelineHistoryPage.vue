<template>
  <nav-bar></nav-bar>

  <div>
    <div class="grid  m-0">
      <div class="col-4 p-0 ">
        <Suspense>
          <template #default>
            <HistoryList/>
          </template>
          <template #fallback>
            <ProgressSpinner class="flex align-items-center"/>
          </template>
        </Suspense>
      </div>
      <div class="col-8 p-0">
        <PipeLineLogDisplay>
        </PipeLineLogDisplay>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import PipeLineLogDisplay from "@/components/PipeLineLogDisplay.vue";
import ProgressSpinner from "primevue/progressspinner";
import {defineAsyncComponent} from "vue";
import NavBar from "@/components/NavBar.vue";

const HistoryList = defineAsyncComponent(() => import('../components/HistoryList.vue'));
</script>


<style scoped>

</style>