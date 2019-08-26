import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { compose } from '../../utils';
import withWeatherService from '../hoc';
import { fetchCityData } from '../../actions';
import Spinner from '../spinner';


class WeatherCity extends Component {

    componentDidMount() {
        //const {weatherService} = this.props;
        // weatherService.fetchData('Rivne')
        // .then((response) => {
        //     console.log('FETCH_DATA_FULFILLED', response.data);
        //   //dispatch({type: FETCH_DATA_FULFILLED, payload: response.data});
        // })
        // .catch((err) => {
        //     console.log('FETCH_DATA_REJECTED', err);
        //   //dispatch({type: FETCH_DATA_REJECTED, payload: err}); // Error handling
        // });    
        // weatherService.getResources()
        // .then((body)=>{
        //     console.log("body", body);
        // })
        // .catch((err)=>console.error(err));   
        this.props.fetchCityData();
    }

    render() {
       
        const {            
            cityDay,
            cityName,
            country,
            tiles,
            tilesLoading,
            tilesError           
        } = this.props;

        if (tilesLoading) {
            return <Spinner />
        }

        if (tilesError) {
            return <ErrorIndicator />
        }      

        const data = tiles.find((el) => {
            return (
                el.day === cityDay
            )
        });    
        
        //console.log("data" , data);

        const {
            // id,           
            tempMax,
            tempMin,
            icon,
            day,
            weatherDescription,
            humidity,
            pressure,
            wind
        } = data;

        return (
            <>
                {/* <div>{id}</div> */}
                <div><h1>{cityName}, {country}</h1></div>
                <div><h5>{day}</h5></div>
                <div><h4>{weatherDescription}</h4></div>
                <Row>
                    <Col>
                        <Row>
                            <img src={icon} alt="alt"></img>
                            <h1>{tempMax}&deg;C/{tempMin}&deg;C</h1>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            Humidity: {humidity}%
                                    </Row>
                        <Row>
                            Pressure: {pressure} mm Hg
                                    </Row>
                        <Row>
                            Wind: {wind} m/s
                                    </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

const mapStateToProps = ({
    tiles,   
    cityDay,
    cityName,
    country,
    tilesLoading,
    tilesError   
}) => {
    return {
        tiles,       
        cityDay,
        cityName,
        country,
        tilesLoading,
        tilesError       
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const { weatherService } = ownProps;

    return {
        fetchCityData: fetchCityData(weatherService, dispatch),
    }
};

export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WeatherCity);