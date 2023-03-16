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
  <h2>{{ units }}</h2>
  <ChangeUnitsSwitch :currentUnit="units" :onChange="changeUnits" />
  <WatherSearchForm :onSubmit="searchWeather"/>
  <WhileLoading v-if="isLoading"/>
  <TheWeather v-if="!isLoading" :weather="weather"/>
  <WeatherHistory :history="locationHistory" />
</template>

<style scoped>

</style>
