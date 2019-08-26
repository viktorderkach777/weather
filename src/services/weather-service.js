import { APP_ID } from '../actions/constants';
import axios from "axios";

export default class WeatherService {
    tiles = [
        {           
            tempMax: 30,
            tempMin: 20,
            icon: 'https:openweathermap.org/img/w/01d.png',
            day: 'monday',
            weatherDescription: 'sun',
            humidity: 60,
            pressure:760,
            wind: 4
        },
        {           
            tempMax: 29,
            tempMin: 28,
            icon: 'https:openweathermap.org/img/w/10d.png',
            day: 'friday',
            weatherDescription: 'sun',
            humidity: 70,
            pressure:770,
            wind: 5
        }

    ];

    cityName = 'Kyiv';
    country = 'UA';   
    cityDay = 'monday';
    

    _apiBase = 'https://api.openweathermap.org/data/2.5/forecast';
    //fetchData = (region) => (dispatch) => {
    fetchData = async (region = 'Rivne') => {
        const { latitude, longitude } = region || {};

        const getDataByCity = `${this._apiBase}?q=${region}&units=metric&appid=${APP_ID}`;
        const getDataByCoords = `${this._apiBase}?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`;

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
                    cityDay: this.cityDay,
                    tiles: this.tiles                    
                });
                //}
            }, 700);
        });
    }
}


