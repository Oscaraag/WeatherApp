class Store {
	constructor() {
		this.city
		this.countrycode
		this.defaultCity = 'Guanare'
		this.defaultCountry = 've'
	}

	getLocationData() {
		if (localStorage.getItem('city') === null) {
			this.city = this.defaultCity
		} else {
			this.city = localStorage.getItem('city')
		}
		if (localStorage.getItem('countrycode') === null) {
			this.countrycode = this.defaultCountry
		} else {
			this.countrycode = localStorage.getItem('countrycode')
		}
		return {
			city: this.city,
			countrycode: this.countrycode,
		}
	}

	setLocationData(city, countryCode) {
		localStorage.setItem('city', city)
		localStorage.setItem('countrycode', countryCode)
	}
}

export default Store
