
const initialState = {
    tiles: [],
    loading: true,
    error: null,
    cityName: 'Kyiv',
    country: 'UA',
    currentCityWeatherDataId: 1,
    cityData: [
        {
            id: 0,
            cityDay: 'monday',
            cityWeatherDescription: 'sun',
            cityWeatherIcon: 'https://openweathermap.org/img/w/01d.png',
            cityTemp: 28,
            cityHumidity: 48,
            cityPressure: 1000,
            cityWind: 5
        },
        {
            id: 1,
            cityDay: 'friday',
            cityWeatherDescription: 'clouds',
            cityWeatherIcon: 'https://openweathermap.org/img/w/01d.png',
            cityTemp: 25,
            cityHumidity: 38,
            cityPressure: 1100,
            cityWind: 7
        }
    ]
};

const reducer = (state = initialState, action) => {

    console.log("action", action);

    switch (action.type) {
        case 'FETCH_TILES_REQUEST':
            return {
                ...state,
                tiles: [],
                loading: true,
                error: null
            };
        case 'FETCH_TILES_SUCCESS':
            return {
                ...state,
                tiles: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_TILES_FAILURE':
            return {
                ...state,
                tiles: [],
                loading: false,
                error: action.payload
            };
        // case 'FETCH_CITY_DATA_SUCCESS':

        //     const currentCityWeatherDataId = action.payload;
        //     const currentCityData = state.cityData.find(
        //         (el) => el.id === currentCityWeatherDataId
        //     );
        //     const cityDataItem = {
        //         id: currentCityData.id,
        //         cityDay: currentCityData.cityDay,
        //         cityWeatherDescription: currentCityData.cityWeatherDescription,
        //         cityWeatherIcon: currentCityData.cityWeatherIcon,
        //         cityTemp: currentCityData.cityTemp,
        //         cityHumidity: currentCityData.cityHumidity,
        //         cityPressure: currentCityData.cityPressure,
        //         cityWind: currentCityData.cityWind
        //     }

        default:
            return state;
    }


    //return state;
};

export default reducer;