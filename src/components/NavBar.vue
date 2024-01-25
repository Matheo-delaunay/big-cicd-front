<script setup lang="ts">
import TabMenu from 'primevue/tabmenu';
import type {TabMenuChangeEvent} from 'primevue/tabmenu';
import {ref, watch} from "vue";
import router from "../router";
import {useRoute} from "vue-router";

const items = ref([
  {label: 'Launch', route: '/'},
  {label: 'History', route: "/pipeline"},
]);
const onChange = (e: TabMenuChangeEvent) => {
  e.index===0 ? router.push({name: 'launcher'}) : router.push({name: 'pipeline'})
    return e.index;
}
const activeMenuItemIndex = ref(0)

watch(
    () => useRoute(),
    (updatedPath) => {
        activeMenuItemIndex.value = items.value.findIndex((item) => updatedPath.path.startsWith(item.route));
    },
    { immediate: true }
);
</script>

<template>

  <TabMenu style="background: var(--surface-700)"
           :active-index="activeMenuItemIndex"
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