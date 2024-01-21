<template>
  <nav-bar></nav-bar>

    <div>
        <div class="grid  m-0">
            <div class="col-4 p-0 ">
                <ListHistoryItem>
                </ListHistoryItem>
            </div>
            <div class="col-8 p-0">
                <PipeLineLogDisplay>
                </PipeLineLogDisplay>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import ListHistoryItem from "@/components/ListHistoryItem.vue";
import PipeLineLogDisplay from "@/components/PipeLineLogDisplay.vue";
import NavBar from "@/components/NavBar.vue";


</script>


<style scoped>

</style>