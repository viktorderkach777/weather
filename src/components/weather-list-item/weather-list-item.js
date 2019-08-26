import React from 'react';
import {
    //Container,
    Row,
    Col,
    Card,
    CardTitle,
    //CardImg,
    CardBody,
    //CardText,
    //Button
} from 'reactstrap';
import './mycenter.css';

const WeatherListItem = ({ tile, onClick }) => {
    const { tempMax, tempMin, icon, day } = tile;
    return (
        // <>
        //     <span>{day}</span>
        //     <span>{icon}</span>
        //     <span>{tempMax}</span>
        //     <span>{tempMin}</span>
        // </>

        <Col>
            {/* <a  style={{ cursor: "pointer" }} onClick={onClick}> */}
            <Card tag="a" style={{ cursor: "pointer", margin: "auto", textAlign: "center" }} onClick={onClick} body outline color="primary" className="text-center">
                <CardBody >
                    <Row>
                        <div className="centerSemen">
                            {day}
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
            {/* </a> */}
        </Col >

    );
};

export default WeatherListItem;