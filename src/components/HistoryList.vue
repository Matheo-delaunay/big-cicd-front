<template>
  <div class="p-0">
    <ScrollPanel
        style=" height: 100vh; background: var(--surface-900)"
        :pt="{
                                bary: 'hover:bg-primary-400  bg-primary-800 opacity-100'
                                }"
    >
      <div v-for="pipeline in pipelines">
        <HistoryItem :pipeline="pipeline"/>
      </div>
    </ScrollPanel>
  </div>
</template>

<script setup lang="ts">
import ScrollPanel from "primevue/scrollpanel";
import type {LightPipelineModel} from "../model/LightPipelineModel";
import {getPipelines} from "../services/pipeline.service";
import HistoryItem from "@/components/HistoryItem.vue";

const pipelines: LightPipelineModel[] = await getPipelines()
</script>

<style scoped>

</style>