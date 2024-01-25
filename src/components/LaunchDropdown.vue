<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import {getCurrentInstance, ref} from "vue";

const props = defineProps({
  label: {type: String, required: true},
  options: {type: Promise<any[]>, required: true},
});

const options: any[] = await props.options;
const value = ref<string>();
const id = getCurrentInstance()?.uid;
</script>

<template>
  <span class="p-float-label">
    <Dropdown :id="id" v-model="value" :options="options" @change="(event) => $emit('value', event.value)"
              :pt="{
                  root: { style: 'width: 20vw' },
                  }"
    />
    <!-- TODO ask Selima aria-describedby="dd-error"-->
    <label :for="id">{{ props.label }}</label>
  </span>
</template>