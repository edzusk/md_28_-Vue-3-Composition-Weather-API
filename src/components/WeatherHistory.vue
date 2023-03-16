<script setup lang="ts"> 
import type { Weather } from '@/stores/weatherStore';
defineProps<{
  history: Weather[]
}>()

</script>

<template>
  <div class="container">
    <div v-if="history.length > 0" class="wrapper">
      <div :key="weather.id"  v-for="weather in history" class="weather">
        <span>{{ weather.location }}</span>
        <span>{{ weather.main }}</span>
        <img :src="`https://openweathermap.org/img/wn/${weather.iconId}@2x.png`" alt="icon">
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--c-main);
  padding: 20px;
}
.weather{
  background-color: var(--c-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
}
</style>