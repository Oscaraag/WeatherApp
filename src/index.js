import Weather from './Weather'
import UI from './UI'
import Store from './Store'

import '../assets/css/bootstrap.min.css'

import '../assets/css/style.css'

const store = new Store()
const { city, countrycode } = store.getLocationData()
const weather = new Weather(city, countrycode)
const ui = new UI()

const fetchWeather = async () => {
	try {
		const data = await weather.getWeather()
		ui.render(data)
	} catch (error) {
		console.log(error.message)
	}
}

document.getElementById('w-change-btn').addEventListener('click', e => {
	e.preventDefault()
	const cityInput = document.getElementById('city').value
	const countryInput = document.getElementById('country-code').value

	weather.changeLocation(cityInput, countryInput)
	store.setLocationData(cityInput, countryInput)
	fetchWeather()
})
document.addEventListener('DOMContentLoaded', fetchWeather)
