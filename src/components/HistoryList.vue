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
              router.push({name: 'pipeline', query: {id: pipeline.id}});
              $emit('load-pipeline', selectedId);
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
import {useRouter} from "vue-router";

const pipelines: LightPipelineModel[] = await getPipelines()

const selectedId = ref()
const router = useRouter()
await router.isReady()
watch(() => router.currentRoute.value, (value)=>{
  selectedId.value = value.query.id
})


</script>

<style scoped>

</style>