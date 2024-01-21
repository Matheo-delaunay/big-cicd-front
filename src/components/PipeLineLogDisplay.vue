<template>
    <ScrollPanel
            style=" height: 100vh; background: var(--surface-700)"
            :pt="{
                        bary: 'hover:bg-primary-400  bg-primary-800 opacity-100'
                    }"
    >
        <h3 class=""></h3>
        <div class="card">
            <h2 class="p-3 " style="color: var(--primary-color)">Simple Card</h2>
            <Accordion :multiple="true" class="p-3">
                <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title"
                              :pt="{
                                headerTitle: {
                                    style: 'color: white;  '
                                },
                                headerIcon: {
                                    style: 'color: white'
                                },
                                headerAction: {style:'background: var(--surface-700); border: 0px solid var(--surface-700)'},
                                content: {
                                    class: 'ml-5 p-0',
                                    style:'background: var(--surface-700); border: 0px solid var(--surface-700); color: white'
                                }
                            }"
                >
                    <p class="m-0 p-3">{{ tab.content }}</p>
                </AccordionTab>
            </Accordion>
        </div>
    </ScrollPanel>
</template>

<script setup lang="ts">
import AccordionTab from "primevue/accordiontab";
import ScrollPanel from "primevue/scrollpanel";
import Accordion from "primevue/accordion";
import {ref} from "vue";

const tabs = ref([
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'}
]);
</script>

<style scoped>

</style>