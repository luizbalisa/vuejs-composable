<script setup>
import DogApi from '@/components/DogApi.vue'
</script>

<template>
	<Suspense>
		<template #default><DogApi/></template>
		<template #fallback>Loanding</template>
	</Suspense>
</template>

<style lang="scss" scoped>

</style>