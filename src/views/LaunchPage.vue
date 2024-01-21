<script setup lang="ts">
import {computed, ref} from 'vue';
import Dropdown from 'primevue/dropdown';
import NavBar from "@/components/NavBar.vue";

import Button from 'primevue/button';




const value1 = ref("");
const value2 = ref("");
const isNotSelected = computed(()=>{
  if ((value1.value === "" ) || (value2.value === "" )){
    return true
  } else {
    return false
  }
})
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])


</script>

<template>
  <nav-bar/>
  <div class="card flex justify-content-center">
    <form class="flex flex-column gap-4">
            <span class="p-float-label">
              <Dropdown id="dd1" v-model="value1" :options="cities" optionLabel="name"
                        aria-describedby="dd-error"
                        :pt="{
                  root: { style: 'width: 20vw' },
                  }"
              />
              <label for="dd1">Select your branch</label>
              </span>
      <span class="p-float-label">

                <Dropdown id="dd2" v-model="value2" :options="cities" optionLabel="name"
                          aria-describedby="dd-error"
                          :pt="{
                  root: { style: 'width: 20vw' },
                  }"
                />
                <label for="dd2">Select your branch</label>
        </span>
      <Button :disabled="isNotSelected" type="submit" label="Launch" class="button"/>
    </form>
  </div>
</template>

<style scoped>


.button {
  border-radius: 50px;
  width: 130px;
  align-self: center;
}
.card {
  margin-top: 30vh;
}

</style>

<style>
body {
  background-color: var(--surface-700); /* Replace #f0f0f0 with the color you want */
}
</style>