import { defineStore } from 'pinia'
import axios from 'axios'

const api_key = import.meta.env.VITE_API_KEY // replace this with valid API key

export type Weather = {
  id: number
  location: string
  windDirection: number
  windSpeed: number
  humidity: number
  temp: number
  tempMax: number
  tempMin: number
  tempReelFeel: number
  iconId: string
  description: string
  main: string
  sunrise: number
  sunset: number
}

type Wind = { speed: number; deg: number }

type MainInfo = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

type WeatherApiResponse = {
  coord: { lon: number; lat: number }
  weather: [{ id: number; main: string; description: string; icon: string }]
  base: string
  main: MainInfo
  visibility: number
  wind: Wind
  clouds: { all: number }
  dt: number
  sys: { type: number; id: number; country: string; sunrise: number; sunset: number }
  timezone: number
  id: number
  name: string
  cod: number
  message: string
}

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weather: {} as Weather,
    units: 'metric',
    location: 'riga',
    locationHistory: [] as Weather[],
    isLoading: false
  }),

  actions: {
    searchWeather(location: string) {
      this.location = location
      this.manageHistory()
      this.getWeather()

    },

    changeUnits() {
      this.units = this.units === 'metric' ? 'imperial' : 'metric'
      this.getWeather()
    },

    getWeather() {
      this.isLoading = true
      try {
        axios
          .get<WeatherApiResponse>(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.units}&APPID=${api_key}`
          )
          .then(({ data }) => {
            if (data.cod !== 200) {
              throw new Error(data.message)
            }

            this.weather = this.handleResponse(data)
            this.isLoading = false
          })
      } catch (error) {
        this.isLoading = false
        throw new Error('Something went wrong!')
      }
    },

    manageHistory() {
      if (
        !this.locationHistory.some((location) => location['location'] === this.weather['location'])
      ) {
        this.locationHistory.unshift(this.weather)
        if (this.locationHistory.length > 5) {
          this.locationHistory.pop()
        }
      }
    },

    handleResponse(weatherResponse: WeatherApiResponse) {
      const weather = {
        id: weatherResponse.id,
        location: weatherResponse.name,
        windDirection: weatherResponse.wind.deg,
        windSpeed: weatherResponse.wind.speed,
        humidity: weatherResponse.main.humidity,
        temp: weatherResponse.main.temp,
        tempMax: weatherResponse.main.temp_max,
        tempMin: weatherResponse.main.temp_min,
        tempReelFeel: weatherResponse.main.feels_like,
        iconId: weatherResponse.weather[0].icon,
        description: weatherResponse.weather[0].description,
        main: weatherResponse.weather[0].main,
        sunrise: weatherResponse.sys.sunrise,
        sunset: weatherResponse.sys.sunset
      }
      return weather
    }
  }
})
