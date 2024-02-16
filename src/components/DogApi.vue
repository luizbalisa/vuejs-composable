<script setup>
import {onMounted, ref} from 'vue'
import { useFetchApi } from '@/composables/useFetchApi';

const dogImage = ref('')

onMounted(async () => {
 const data = await useFetchApi('https://dog.ceo/api/breeds/image/random')
 dogImage.value = data.info
})

</script>

<template>
<img :src="dogImage.message" alt="">

</template>

<style scoped>

</style>
