<script setup lang="ts">
import { ref } from 'vue';


defineProps<{
  onSubmit: (location: string) => void
}>()

const searchText = ref('')

</script>

<template>
    <div class="container">
        <div class="wrapper">
            <form @submit.prevent="() => onSubmit(searchText)" action="">
               <input v-model="searchText" type="text">
               <button class="button">Search</button>
            </form>
        </div>
    </div>
</template>

<style>


</style>