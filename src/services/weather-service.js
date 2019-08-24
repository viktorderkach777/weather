export default class WeatherService {
    tiles = [
        {
            id: 1,
            tempMax: 30,
            tempMin: 20,
            icon: 'https:openweathermap.org/img/w/01d.png',
            day: 'monday'
        },
        {
            id: 2,
            tempMax: 29,
            tempMin: 28,
            icon: 'https:openweathermap.org/img/w/01d.png',
            day: 'monday'
        }

    ];

    cityName = 'Kyiv';
    country = 'UA';
    currentCityWeatherDataId = 1;
    cityData = [
        {
            id: 1,
            cityDay: 'monday',
            cityWeatherDescription: 'sun',
            cityWeatherIcon: 'https://openweathermap.org/img/w/01d.png',
            cityTemp: 28,
            cityHumidity: 48,
            cityPressure: 1000,
            cityWind: 5
        },
        {
            id: 2,
            cityDay: 'friday',
            cityWeatherDescription: 'clouds',
            cityWeatherIcon: 'https://openweathermap.org/img/w/01d.png',
            cityTemp: 25,
            cityHumidity: 38,
            cityPressure: 1100,
            cityWind: 7
        }
    ];


    getTiles() {
        //return this.tiles;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.75) {
                //     reject(new Error('Something bad happened'));
                // } else {
                    resolve(this.tiles);
                //}
            }, 700);
        });
    };

    getCityData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.75) {
                //     reject(new Error('Something bad happened'));
                // } else {
                    resolve({
                        cityName : this.cityName,
                        country: this.country,
                        currentCityWeatherDataId: this.currentCityWeatherDataId,
                        cityData: this.cityData
                    });
                //}
            }, 700);
        });        
    }
}