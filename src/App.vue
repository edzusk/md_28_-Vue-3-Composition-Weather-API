<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia'

import {useWeatherStore} from './stores/weatherStore'

import TheWeather from "./components/TheWeather.vue"
import  WatherSearchForm  from './components/WatherSearchForm.vue'
import WeatherHistory from './components/WeatherHistory.vue'
import ChangeUnitsSwitch from './components/ChangeUnitsSwitch.vue'
import WhileLoading from './components/WhileLoading.vue';

const weatherStore = useWeatherStore()

const { units, locationHistory, weather, isLoading  } = storeToRefs(weatherStore)

const { changeUnits, searchWeather, getWeather } = weatherStore

onMounted( () => {
  getWeather()
})

</script>

<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <WatherSearchForm :onSubmit="searchWeather"/>
        <h3>{{ units }}</h3>
        &nbsp;
        <ChangeUnitsSwitch :currentUnit="units" :onChange="changeUnits" />
      </div>
    </div>
  </header>
  <WhileLoading v-if="isLoading"/>
  <TheWeather v-if="!isLoading" :weather="weather"/>
  <WeatherHistory :history="locationHistory" />
</template>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--c-main);
}
</style>
