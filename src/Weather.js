class Weather {
	constructor(city, countryCode) {
		this.apikey = '37dc6724e5c7ba9d028b1642b81c083a'
		this.city = city
		this.countryCode = countryCode
	}

	async getWeather() {
		const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
		try {
			const respone = await fetch(API)
			const data = await respone.json()
			return data
		} catch (error) {
			console.error(error)
		}
	}

	changeLocation(city, countryCode) {
		this.city = city
		this.countryCode = countryCode
	}
}

export default Weather
