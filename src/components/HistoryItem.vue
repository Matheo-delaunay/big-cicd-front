<script setup lang="ts">
import {computed, ref} from "vue";
import type {LightPipelineModel} from "../models/LightPipelineModel";

const props = defineProps<{
  pipeline: LightPipelineModel,
  isSelected: boolean
}>();
const getDate = computed(() => {
  const date = new Date(props.pipeline.date.toString());
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().padStart(4, "0");
  return `${day}/${month}/${year}`;
});

const setStatus = computed(() => ({
  'pi-check': props.pipeline.status == "Success",
  'pi-times': props.pipeline.status == "Failed",
  'pi-spin': props.pipeline.status != "Success" && props.pipeline.status != "Failed",
  'pi-spinner': props.pipeline.status != "Success" && props.pipeline.status != "Failed",
}));
const setStyle = computed(() => {
  if (props.pipeline.status == "Success") {
    return {'color': 'var(--primary-color)'}
  } else if (props.pipeline.status == "Failed") {
    return {'color': 'var(--red-400)'}
  } else {
    return {'color': 'var(--orange-400)'}
  }


});

</script>

<template>
  <div class="grid p-3"  :style="{ backgroundColor: props.isSelected ? 'var(--surface-700)' : undefined }">
    <div class="col-2 flex justify-content-center align-items-center">
      <i class="pi" :class="setStatus" style="font-size: 2rem" :style="setStyle"></i>
    </div>
    <div class="col-10">
      <div class="grid">
        <div class="col-12" style="color: white">
          <div class="pr-3" style="text-overflow: ellipsis; white-space: nowrap; overflow-x: hidden">
            {{ props.pipeline.repository }} : {{ props.pipeline.ref }}
          </div>
        </div>
        <div class="col-6" style="color: var(--gray-400)">
          {{ getDate }}
        </div>
        <div class="col-6" style="color: var(--gray-400)">
          {{ props.pipeline.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>