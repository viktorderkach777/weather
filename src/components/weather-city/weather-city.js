import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { compose } from '../../utils';
import withWeatherService from '../hoc';
import { fetchTiles } from '../../actions';
import Spinner from '../spinner';
import './weather-city.css';


class WeatherCity extends Component {

    componentDidMount() {

        this.props.fetchTiles();
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
        fetchTiles: fetchTiles(weatherService, dispatch),
    }
};

export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WeatherCity);