const tilesLoaded = (tiles) => {
    return {
        type: 'Tiles_Loaded',
        payload: tiles
    };
};

export{
    tilesLoaded
};