
const initialState = {
    tiles: [],
    tilesLoading: true,
    tilesError: null,
    cityDataLoading: true,
    cityDataError: null,
    cityName: null,
    country: null,
    currentCityWeatherDataId: null,
    cityData: []
};

const reducer = (state = initialState, action) => {

    console.log("action", action);

    switch (action.type) {
        case 'FETCH_TILES_REQUEST':
            return {
                ...state,
                tiles: [],
                tilesLoading: true,
                tilesError: null
            };
        case 'FETCH_TILES_SUCCESS':
            return {
                ...state,
                tiles: action.payload,
                tilesLoading: false,
                tilesError: null
            };
        case 'FETCH_TILES_FAILURE':
            return {
                ...state,
                tiles: [],
                tilesLoading: false,
                tilesError: action.payload
            };
        case 'FETCH_CITY_DATA_BY_ID_SUCCESS':            
            return {
                ...state,
                currentCityWeatherDataId: action.payload
            };
        case 'FETCH_CITY_DATA_SUCCESS':
            const {
                cityName,
                country,
                currentCityWeatherDataId,
                cityData
            } = action.payload;
            return {
                ...state,
                cityName,
                country,
                currentCityWeatherDataId,
                cityData,
                cityDataLoading: false,
                cityDataError: null
            };
        case 'FETCH_CITY_DATA_REQUEST':
            return {
                ...state,
                cityName: null,
                country: null,
                currentCityWeatherDataId: null,
                cityData: [],
                cityDataLoading: true,
                cityDataError: null
            };
        case 'FETCH_CITY_DATA_FAILURE':
            return {
                ...state,
                cityName: null,
                country: null,
                currentCityWeatherDataId: null,
                cityData: [],
                cityDataLoading: false,
                cityDataError: action.payload
            };

        default:
            return state;
    }


    //return state;
};

export default reducer;