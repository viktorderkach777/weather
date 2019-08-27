
const initialState = {
    tiles: [],
    tilesLoading: true,
    tilesError: null,
    cityDataLoading: true,
    cityDataError: null,
    cityName: null,
    country: null,
    currentCityWeatherDataId: null,
    cityDay: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_TILES_REQUEST':
            return {
                ...state,
                tiles: [],
                tilesLoading: true,
                tilesError: null
            };
        case 'FETCH_TILES_SUCCESS':
                const {
                    cityName,
                    country,
                    cityDay,
                    tiles
                } = action.payload;
            return {
                ...state,
                cityName,
                country,
                cityDay,
                tiles,
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
        case 'FETCH_CITY_DATA_BY_DAY_SUCCESS':
            return {
                ...state,
                cityDay: action.payload
            };
        case 'FETCH_CITY_DATA_SUCCESS':
            // const {
            //     cityName,
            //     country,
            //     cityDay,
            //     tiles
            // } = action.payload;
            return {
                ...state,
                cityName: action.payload.cityName,
                country: action.payload.country,
                cityDay: action.payload.cityDay,
                tiles: action.payload.tiles
            };

        default:
            return state;
    }

    //return state;
};

export default reducer;