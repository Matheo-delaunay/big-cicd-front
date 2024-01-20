<script setup lang="ts">
import {computed, ref} from "vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';




const email = ref("");
const password = ref("");
const regexEmail = /^[\w][\w0-9_@]{2,14}$/
const errorEmail = computed( () => {
  if (regexEmail.test(email.value) && password.value.length > 0)
    return true
})

</script>

<template>

  <div class="loginCard">
        <div class="login">
            <img class="logo"
                 src="/favicon.ico" />
            <div class="title">Login</div>
            <form>
              <InputText placeholder="Email" v-model="email"/>
              <Password :feedback="false" placeholder="Password" v-model="password" toggleMask/>
              <Button :disabled="!errorEmail" >Submit</Button>
            </form>
          </div>
        </div>
</template>

<style scoped>

 .loginCard {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
 }
 .title {
   width: 100%;
   font-size: 1.8rem;
   margin-bottom: 10px;
   text-align: center;
 }
 .login {
   padding: 15px;
   width: 300px;
   box-shadow: 0 0 10px rgba(0,0,0,0.1);
 }
 form > * {
   margin-bottom: 15px;
 }

 button, .logo {
   display: block;
   margin-left: auto;
   margin-right: auto;
 }
 form input {
   width: 100%;
 }


</style>