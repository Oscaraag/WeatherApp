class UI {
	constructor() {
		this.location = document.getElementById('weather-location')
		this.descrip = document.getElementById('weather-description')
		this.stringtemp = document.getElementById('weather-string')
		this.humidity = document.getElementById('weather-humidity')
		this.wind = document.getElementById('weather-wind')
	}

	render(weathers) {
		const { name, weather, main, sys, wind } = weathers

		this.location.textContent = `${name.toUpperCase()}, ${sys.country}`
		this.descrip.textContent = `${weather[0].description.toUpperCase()}`
		this.stringtemp.textContent = `${main.temp} °C`
		this.humidity.textContent = `Humidity ${main.humidity}%`
		this.wind.textContent = `Wind ${wind.speed} m/s`
	}
}

export default UI
