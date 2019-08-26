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

const cityDataLoadedByDay = (cityDay) => {
    return {
        type: 'FETCH_CITY_DATA_BY_DAY_SUCCESS',
        payload: cityDay
    };
};

const cityDataLoaded = (data) => {
    return {
        type: 'FETCH_CITY_DATA_SUCCESS',
        payload: data
    };
};

const fetchTiles = (weatherService, dispatch) => () => {
    dispatch(tilesRequested());
    weatherService.getTiles()
        .then((tiles) => {
            //console.log("tiles", tiles);
            dispatch(tilesLoaded(tiles))
        })
        .catch((err) => dispatch(tilesError(err)));
}

const fetchCityData = (weatherService, dispatch) => () => {
    //dispatch(cityDataRequested());
    weatherService.getCityData()
        .then((data) => {
            //console.log("CityData", data);
            dispatch(cityDataLoaded(data))
        })       
}

export {
    fetchTiles,   
    cityDataLoadedByDay,
    fetchCityData
};