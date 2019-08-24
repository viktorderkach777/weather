import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';

class WeatherCity extends Component {

    render() {
        const {
            currentCityWeatherDataId,
            cityName,
            country,
            cityData
        } = this.props;

        const data = cityData.filter((el) => {
            return (
                el.id === currentCityWeatherDataId ? el : null
            )
        });

        console.log("data", data);
        
        if (data.length === 0) {
            return <ErrorIndicator />
        }

        const {
            id,
            cityDay,
            cityWeatherDescription,
            cityWeatherIcon,
            cityTemp,
            cityHumidity,
            cityPressure,
            cityWind
        } = data[0];//cityData[currentCityWeatherDataId];

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
    country
}) => {
    return {
        cityData,
        currentCityWeatherDataId,
        cityName,
        country
    };
}

// const mapDispatchToProps = ()=>{
//     return{

//     }
// }

export default connect(mapStateToProps)(WeatherCity);