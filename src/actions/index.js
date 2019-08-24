const tilesRequested = () => {
    return {
        type: 'FETCH_TILES_REQUEST'
    };
};

const tilesLoaded = (tiles) => {
    return {
        type: 'FETCH_TILES_SUCCESS',
        payload: tiles
    };
};

const tilesError = (error) => {
    return {
        type: 'FETCH_TILES_FAILURE',
        payload: error
    };
};

const cityDataLoadedById = (currentCityWeatherDataId) => {
    return {
        type: 'FETCH_CITY_DATA_BY_ID_SUCCESS',
        payload: currentCityWeatherDataId
    };
};

const cityDataRequested = () => {
    return {
        type: 'FETCH_CITY_DATA_REQUEST'
    };
};

const cityDataLoaded = (data) => {
    return {
        type: 'FETCH_CITY_DATA_SUCCESS',
        payload: data
    };
};

const cityDataError = (error) => {
    return {
        type: 'FETCH_CITY_DATA_FAILURE',
        payload: error
    };
};


const fetchTiles = (weatherService, dispatch) => () => {
    dispatch(tilesRequested());
    weatherService.getTiles()
        .then((tiles) => {
            console.log("tiles", tiles);
            dispatch(tilesLoaded(tiles))
        })
        .catch((err) => dispatch(tilesError(err)));
}

const fetchCityData = (weatherService, dispatch) => () => {
    dispatch(cityDataRequested());
    weatherService.getCityData()
        .then((data) => {
            console.log("CityData", data);
            dispatch(cityDataLoaded(data))
        })
        .catch((err) => dispatch(cityDataError(err)));
}

export {
    fetchTiles,
    cityDataLoadedById,
    fetchCityData
};