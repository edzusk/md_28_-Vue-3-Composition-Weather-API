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
            <form class="form" @submit.prevent="() => onSubmit(searchText)"  action="">
               <input class="text-input" v-model="searchText" type="text" placeholder="Ipiķi...">
               <button class="button">Search</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.form{
    display: flex;
    gap: 20px;
}
.text-input{
    padding: 5px 10px;
  border-radius: 15px;
  border: 2px solid var(--c-accent);
  background-color: var(--c-accent);
}
.text-input:focus {
    border: 2px solid var(--c-secondary);
    outline: none;
}

</style>