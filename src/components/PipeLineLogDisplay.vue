<template>
    <ScrollPanel
            style=" height: calc(100vh - 58px); background: var(--surface-700)"
            :pt="{
                        bary: 'hover:bg-primary-400  bg-primary-800 opacity-100'
                    }"
    >
        <h3 class=""></h3>
        <div class="card" v-if="!error">
            <h2 class="p-3" style="color: var(--primary-color)">Pipeline {{ pipeline.ref }}</h2>
            <h4 class="p-2" style="color: var(--primary-color)">Id {{ pipeline.id }}</h4>
            <Accordion :multiple="true" class="p-3">
                <AccordionTab v-for="job in pipeline.jobs" :key="job.name" :header="job.name"
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
                    <p class="m-0 p-3">{{ job.logs }}</p>
                </AccordionTab>
            </Accordion>
        </div>
        <div v-else>
            <ErrorPage>

            </ErrorPage>
        </div>
    </ScrollPanel>
</template>

<script setup lang="ts">
import AccordionTab from "primevue/accordiontab";
import ScrollPanel from "primevue/scrollpanel";
import Accordion from "primevue/accordion";
import {getPipeline} from "../services/pipeline.service";
import {computed, onBeforeUnmount, onMounted, onUpdated, ref, watch} from "vue";
import ErrorPage from "../views/ErrorPage.vue";
import {Client} from "@stomp/stompjs";

const props = defineProps<{
    pipelineId: string
}>();
const pipeline = ref(await getPipeline(props.pipelineId))
const client = ref();
const subscribeInstance = ref()

const subscribe = ()=>{
    console.log('subscribed')
    subscribeInstance.value = client.value.subscribe('/topic/pipeline/' + props.pipelineId, (message: { body: string; }) => {
        console.log(message.body)
        pipeline.value.jobs.push(JSON.parse(message.body))
    })
}
const unsubscribe = ()=>{
    console.log('unsubscribed')
    client.value.unsubscribe(subscribeInstance.value.id)
}
onMounted(()=>{
    client.value = new Client({
        brokerURL: 'wss://cicd-back.nathanaudvard.fr/ws',
        onConnect: subscribe
    })
    client.value.activate()
})

onUpdated(()=>{
    if (subscribeInstance.value != undefined) {
        unsubscribe()
    }
    subscribe()
})
watch(props, async (oldProps, newProps) => {
    pipeline.value = await getPipeline(props.pipelineId)
})

onBeforeUnmount(()=>{
    if (client.value != undefined) {
        client.value.deactivate()
    }
})
const error = computed(() => pipeline.value == undefined)
</script>

<style scoped>

</style>
