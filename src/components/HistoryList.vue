<template>
  <div class="p-0">
    <ScrollPanel
        style=" height: calc(100vh - 58px); background: var(--surface-900)"
        :pt="{
                                bary: 'hover:bg-primary-400  bg-primary-800 opacity-100'
                                }"
    >
      <div v-for="pipeline in pipelines">
        <HistoryItem
            @click="() => {
              $emit('load-pipeline', pipeline.id);
              selectedId=pipeline.id
            }"
            :pipeline="pipeline"
            :isSelected ="pipeline.id==selectedId"
        />
      </div>
    </ScrollPanel>
  </div>
</template>

<script setup lang="ts">
import ScrollPanel from "primevue/scrollpanel";
import type {LightPipelineModel} from "../models/LightPipelineModel";
import {getPipelines} from "../services/pipeline.service";
import HistoryItem from "@/components/HistoryItem.vue";
import {ref, watch} from "vue";

const selectedId = ref()

const pipelines: LightPipelineModel[] = await getPipelines()
</script>

<style scoped>

</style>