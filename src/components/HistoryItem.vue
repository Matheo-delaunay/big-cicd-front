<script setup lang="ts">
import {computed, ref} from "vue";

const status = ref("DONE");
const isDone = computed(() => {
  return status.value === "DONE";
});
const setStatus = computed(() => ({
  'pi-check': isDone.value,
  'pi-spin': !isDone.value,
  'pi-spinner': !isDone.value,
}));
const setStyle = computed(() => ({
  'color': isDone.value ? 'var(--primary-color)' : 'var(--orange-400)'
}));
</script>

<template>
  <div class="grid p-3">
    <div class="col-2 flex justify-content-center align-items-center">
      <i class="pi" :class="setStatus" style="font-size: 2rem" :style="setStyle"></i>
    </div>
    <div class="col-10">
      <div class="grid">
        <div class="col-12" style="color: white">
          <div class="pr-3" style="text-overflow: ellipsis; white-space: nowrap; overflow-x: hidden">
            Ici un long titre peut-être trop long pour tenir sur une ligne on sait pas
          </div>
        </div>
        <div class="col-6" style="color: var(--gray-400)">
          21/01/2024
        </div>
        <div class="col-6" style="color: var(--gray-400)">
          01:18:00
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>