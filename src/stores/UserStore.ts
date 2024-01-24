import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useUserStore = defineStore("user", () => {
    const accessToken = ref<string>();
    const id = ref<number>();

    const isLoggedIn = computed(() => accessToken.value !== undefined);

    return {
        accessToken,
        id,
        isLoggedIn
    }
});