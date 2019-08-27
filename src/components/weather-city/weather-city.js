import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { compose } from '../../utils';
import withWeatherService from '../hoc';
import { fetchCityData } from '../../actions';
import Spinner from '../spinner';
import './weather-city.css';


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
        console.log("cityProps",this.props);
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

        console.log("data", data);

        const {
            // id,           
            tempMax,
            tempMin,
            icon,
            day,
            weatherDescription,
            humidity,
            pressure,
            wind,
            calendDay,
            calendMonth
        } = data;
        //const tempMax =  data.tempMax|| null;

        return (
            <>
                <Row>
                    <Col>
                        <Row>
                            <div className="city">
                                <h1 >{cityName}, {country}</h1>
                                <h5 >{day}</h5>
                                <h4 >{weatherDescription}</h4>
                                <img src={icon} alt="alt" className="city"></img>
                                <h3 ><strong>{tempMax}&deg;</strong>/{tempMin}&deg;</h3>
                            </div>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <div className="city">
                                <h3 style={{ marginBottom: "30px" }}>{calendMonth}, {calendDay}</h3>
                                <h5 > Humidity: {humidity}%</h5>
                                <h5 > Pressure: {pressure} mm Hg</h5>
                                <h5 >Wind: {wind} m/s</h5>
                            </div>
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