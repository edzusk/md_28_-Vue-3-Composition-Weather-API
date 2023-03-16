<script setup lang="ts">

import type  {  Weather } from '../stores/weatherStore'

defineProps<{
  weather: Weather

//   mainInfo: MainInfo
//   wind: Wind
//   location: WeatherResponse['name']
}>()

// const iconId = this.weather
</script>

<template>
    <div class="container">
        <h1>
            {{ weather.location }}
        </h1>
        <h2>{{ weather.main }}</h2>
        <img :src="`https://openweathermap.org/img/wn/${weather.iconId}@2x.png`" alt="">


        <span> Temp:{{ weather.temp }}</span>
        <span> Real Feel:{{ weather.tempReelFeel }}</span>
        <span> Min/Max:{{ weather.tempMin }}/{{ weather.tempMax }} </span>
        <span> Pressure:{{ weather.humidity }}</span>
    </div>
</template>