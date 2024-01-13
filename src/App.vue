<template>
  <div>
    <div>
      <login-card></login-card>
      <component :is="currentComponent === 0 ? SignInCard : LoginCard"></component>
      <button @click="toggleChange=!toggleChange">{{buttonText}}</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
import LoginCard from "@/components/LoginCard.vue";
import SignInCard from "@/components/SignInCard.vue";

const toggleChange = ref(false)
const buttonText = ref('');
const currentComponent = computed( ()=> {
  if (toggleChange.value) {
    buttonText.value = "sing in";
    return 0;
  } else {
    buttonText.value = "login";
    return 1
  }
})
</script>