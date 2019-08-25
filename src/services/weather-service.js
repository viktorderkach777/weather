import { APP_ID } from '../actions/constants';
import axios from "axios";
//import { async } from 'q';

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
            icon: 'https:openweathermap.org/img/w/10d.png',
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
            cityWeatherIcon: 'https://openweathermap.org/img/w/03d.png',
            cityTemp: 25,
            cityHumidity: 38,
            cityPressure: 1100,
            cityWind: 7
        }
    ];

    //_apiBase = 
    //fetchData = (region) => (dispatch) => {
    fetchData = async (region = 'Rivne') => {
        const { latitude, longitude } = region || {};

        const getDataByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${region}&units=metric&appid=${APP_ID}`;
        const getDataByCoords = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`;

        let location = typeof (region) === "object" ? getDataByCoords : getDataByCity;

        return await axios.get(location)
        // .then((response) => {
        //     console.log('FETCH_DATA_FULFILLED', response.data);
        //   //dispatch({type: FETCH_DATA_FULFILLED, payload: response.data});
        // })
        // .catch((err) => {
        //     console.log('FETCH_DATA_REJECTED', err);
        //   //dispatch({type: FETCH_DATA_REJECTED, payload: err}); // Error handling
        // });
    };

    getResources = async () => {
        // const body = await this.fetchData(this.cityName);
        // console.log("res",body);
        // if(body.ok){
        //     throw new Error(`Could not fetch, received ${body.status}`);
        // }
        this.fetchData()
        .then((body)=>{
            console.log("res",body);
            if(body.ok){
                throw new Error(`Could not fetch, received ${body.status}`);
            }
            return body;
        })     
    }





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

    getCityData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.75) {
                //     reject(new Error('Something bad happened'));
                // } else {
                resolve({
                    cityName: this.cityName,
                    country: this.country,
                    currentCityWeatherDataId: this.currentCityWeatherDataId,
                    cityData: this.cityData
                });
                //}
            }, 700);
        });
    }
}

// weatherService = new WeatherService();
// weatherService.getResources();
