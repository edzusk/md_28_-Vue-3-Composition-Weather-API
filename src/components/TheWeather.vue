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
        <div class="weather">
            <img class="weather__icon" :src="`https://openweathermap.org/img/wn/${weather.iconId}@4x.png`" alt="">
            <div class="weather__info">
                <h1>
                    {{ weather.location }}
                </h1>
                <h2>{{ weather.main }}</h2>
            </div>
            <div class="weather__data">
                <span> Temp:{{ weather.temp }}</span>
                <span> Real Feel:{{ weather.tempReelFeel }}</span>
                <span> Min/Max:{{ weather.tempMin }}/{{ weather.tempMax }} </span>
                <span> Pressure:{{ weather.humidity }}</span>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.weather{
    display: flex;
    justify-content: space-around;
    padding: 20px;
    min-height: 300px;
}
.weather__info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

.weather__data{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
}
.weather__icon {
    object-fit: contain;
}
</style>