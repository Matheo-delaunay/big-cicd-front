<script setup lang="ts">
import TabMenu from 'primevue/tabmenu';
import {ref} from "vue";
import router from "@/router";

const items = ref([
  {label: 'Launch'},
  {label: 'History'},
]);
const activateIndex = ref()

const onChange = (e) => {
  e.index===0 ? router.push({name: 'launcher'}) : router.push({name: 'pipeline'})
}
</script>

<template>

  <TabMenu style="background: var(--surface-700)"
           :active-index="activateIndex"
           :model="items"
           @tab-change="onChange"
           :pt="{
        root: {style: 'height: 58px'},
        menu: {style: 'background: var(--surface-900)'},
        menuitem: {style: 'margin-left: 14vw'},
        action: ({ props, state, context }) =>
        ({style: context.index === state.d_activeIndex ? 'color: var(--primary-color); background: var(--surface-900); width: 30vw; justify-content: center' : 'color: white; background: var(--surface-900); width: 30vw; justify-content: center'} ),
        }"
  />

</template>

<style scoped>

</style>