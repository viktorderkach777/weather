import React, { Component } from 'react';
import WeatherListItem from '../weather-list-item';
import { connect } from 'react-redux';
import {compose} from '../../utils';
import withWeatherService from '../hoc';
import {tilesLoaded} from '../../actions';
import Spinner from '../spinner';

class WeatherList extends Component {
    //state = {}
    componentDidMount() {
        const { weatherService, tilesLoaded } = this.props;
        weatherService.getTiles()
        .then((tiles)=>{
            console.log("tiles", tiles);
            tilesLoaded(tiles);
        })        
    }

    render() {
        const { tiles, loading } = this.props;

        if(loading){
            return <Spinner/>
        }
        return (
            <div>
                {
                    tiles.map((tile) => {
                        return (
                            //  <li key={tile.id}>
                                <WeatherListItem key={tile.id} tile={tile} />
                            //  </li>
                        )
                    })
                }
           </div>
        );
    }
}

const mapDispatchToProps = {
    tilesLoaded
};

const mapStateToProps = (state) => {
    return {
        tiles: state.tiles,
        loading: state.loading
    };
};

export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(WeatherList);