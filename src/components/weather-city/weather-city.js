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
            currentCityWeatherDataId,
            cityName,
            country,
            cityData,
            cityDataLoading,
            cityDataError
        } = this.props; 
        
        if(cityDataLoading){
            return <Spinner />
        }

        if (cityDataError) {
            return <ErrorIndicator />
        }        

        const data = cityData.find((el) => {
            return (
                el.id === currentCityWeatherDataId
            )
        });        

        const {
            id,
            cityDay,
            cityWeatherDescription,
            cityWeatherIcon,
            cityTemp,
            cityHumidity,
            cityPressure,
            cityWind
        } = data;

        return (
            <>
                <div>{id}</div>
                <div><h1>{cityName}, {country}</h1></div>
                <div><h5>{cityDay}</h5></div>
                <div><h4>{cityWeatherDescription}</h4></div>
                <Row>
                    <Col>
                        <Row>
                            <img src={cityWeatherIcon} alt="alt"></img>
                            <h1>{cityTemp}&deg;C</h1>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            Humidity: {cityHumidity}%
                                    </Row>
                        <Row>
                            Pressure: {cityPressure} mm Hg
                                    </Row>
                        <Row>
                            Wind: {cityWind} m/s
                                    </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

const mapStateToProps = ({
    cityData,
    currentCityWeatherDataId,
    cityName,
    country,
    cityDataLoading,
    cityDataError
}) => {
    return {
        cityData,
        currentCityWeatherDataId,
        cityName,
        country,
        cityDataLoading,
        cityDataError
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