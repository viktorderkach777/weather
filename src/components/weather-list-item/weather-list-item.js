import React from 'react';
import {
    //Container,
    Row,
    Col,
    Card,
    // CardTitle,
    //CardImg,
    CardBody,
    //CardText,
    //Button
} from 'reactstrap';
import './weather-list-item.css';

const WeatherListItem = ({ tile, onClick }) => {
    // console.log("-----tile------", tile)
    const { tempMax, tempMin, icon, day, calendDay, calendMonth } = tile;
    return (
        <Col>           
            <Card tag="a" style={{ cursor: "pointer", margin: "auto", textAlign: "center" }} onClick={onClick} body outline color="primary" className="text-center">
                <CardBody >
                    <Row>
                        <div className="centerSemen ">
                            {day}
                        </div>
                    </Row>
                    <Row>
                        <div className="centerSemen ">
                            <strong>{calendDay}</strong>
                        </div>
                    </Row>
                     <Row>
                        <div className="centerSemen month">
                            {calendMonth}
                        </div>
                    </Row> 
                    <Row>
                        <div className="centerSemen">
                            <img src={icon} alt="alt"></img>
                        </div>
                    </Row>
                    <Row>
                        <div className="centerSemen">
                            <strong>{tempMax}&deg;</strong>/{tempMin}&deg;
                        </div>
                    </Row>
                </CardBody>
            </Card>           
        </Col >

    );
};

export default WeatherListItem;