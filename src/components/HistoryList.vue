<template>
  <div class="p-0" style="background: var(--surface-900)">
      <div class="flex p-0 justify-content-center align-items-center">
          <Button class="m-1 mr-4 p-1" icon="pi pi-angle-double-left" @click="prevPage"></Button>
          <p class="font-bold m-0" style="color: var(--surface-100)">{{ page+1 }}</p>
          <Button class="m-1 ml-4 p-1" icon="pi pi-angle-double-right" @click="nextPage"></Button>
      </div>
      <div style="height: 2px; background: var(--surface-200)"></div>
    <ScrollPanel
        style=" height: calc(100vh - 100px); background: var(--surface-900)"
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
import Button from 'primevue/button';
import ScrollPanel from "primevue/scrollpanel";
import type {LightPipelineModel} from "../models/LightPipelineModel";
import {getPipelines} from "../services/pipeline.service";
import HistoryItem from "../components/HistoryItem.vue";
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";

const pipelines = ref<LightPipelineModel[]>(await getPipelines(0))

const id = ref()
onMounted(()=>{
  id.value = router.currentRoute.value.query.id
})

const router = useRouter()
await router.isReady()
watch(() => router.currentRoute.value, (value)=>{
  id.value = value.query.id
})

const page = ref(0)

const nextPage= async () => {
    const pipelinesTemp = await getPipelines(page.value+1)
    if(pipelinesTemp.length != 0){
        pipelines.value = pipelinesTemp
        page.value += 1
    }
}
const prevPage= async () => {
    if(page.value > 0){
        pipelines.value = await getPipelines(page.value - 1)
        page.value -= 1

    }
}
</script>

<style scoped>

</style>