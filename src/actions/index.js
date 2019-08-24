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

const cityDataLoaded = (currentCityWeatherDataId) => {
    return {
        type: 'FETCH_CITY_DATA_SUCCESS',
        payload: currentCityWeatherDataId
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

export {
    fetchTiles,
    cityDataLoaded
};