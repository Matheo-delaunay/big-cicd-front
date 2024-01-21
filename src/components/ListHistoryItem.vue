<template>
    <div class="p-0">
        <ScrollPanel
                style=" height: calc(100vh - 58px); background: var(--surface-900)"
                :pt="{
                                bary: 'hover:bg-primary-400  bg-primary-800 opacity-100'
                                }"
        >
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
            <HistoryItem></HistoryItem>
        </ScrollPanel>
    </div>
</template>

<script setup lang="ts">
import HistoryItem from "@/components/HistoryItem.vue";
import ScrollPanel from "primevue/scrollpanel";

</script>

<style scoped>

</style>