import React, { Component } from 'react';
import WeatherListItem from '../weather-list-item';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import withWeatherService from '../hoc';
import { fetchTiles, cityDataLoadedByDay } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class WeatherListContainer extends Component {

    componentDidMount() {
        this.props.fetchTiles();        
    }

    render() {
        const { tiles, tilesLoading, tilesError, clickTile } = this.props;

        if (tilesLoading) {
            return <Spinner />
        }

        if (tilesError) {
            return <ErrorIndicator />
        }

        return (
            <WeatherList tiles={tiles} clickTile={clickTile}/>            
        );
    }
}

const WeatherList = ({ tiles, clickTile }) => {
    return (
        <>
            {
                tiles.map((tile, index) => {
                    return (
                        <WeatherListItem key={index} tile={tile} onClick={()=>{clickTile(tile.day)}}/>
                    )
                })
            }
        </>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { weatherService } = ownProps;

    return {
        fetchTiles: fetchTiles(weatherService, dispatch),
        clickTile: (name) =>{
            dispatch(cityDataLoadedByDay(name))            
        }        
    }
};

const mapStateToProps = (state) => {
    return {
        tiles: state.tiles,
        tilesLoading: state.tilesLoading,
        tilesError: state.tilesError
    };
};

export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WeatherListContainer); 