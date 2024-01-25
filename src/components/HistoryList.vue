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
            }"
            :pipeline="pipeline"
            :isSelected ="pipeline.id==id"
        />
      </div>
    </ScrollPanel>
  </div>
</template>

<script setup lang="ts">
import ScrollPanel from "primevue/scrollpanel";
import type {LightPipelineModel} from "../models/LightPipelineModel";
import {getPipelines} from "../services/pipeline.service";
import HistoryItem from "../components/HistoryItem.vue";
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";

const pipelines: LightPipelineModel[] = await getPipelines()

const id = ref()
onMounted(()=>{
  id.value = router.currentRoute.value.query.id
})

const router = useRouter()
await router.isReady()
watch(() => router.currentRoute.value, (value)=>{
  id.value = value.query.id
})


</script>

<style scoped>

</style>