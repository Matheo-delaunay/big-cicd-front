<script setup lang="ts">
import HistoryItem from "@/components/HistoryItem.vue";
import ScrollPanel from "primevue/scrollpanel";
</script>

<template>
  <div class="grid" style="margin-bottom: -0.5rem">
    <div class="col-4 p-0" style="background: #282828;">
      <ScrollPanel class="h-screen" style="width: 100%;">
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </ScrollPanel>
    </div>
    <div class="col-8 p-0">
      a
    </div>
  </div>
</template>

<style scoped>
</style>