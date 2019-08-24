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
            <button style={{ cursor: "pointer" }} onClick={onClick}>
                <Card body outline color="primary">
                    <CardBody >
                        <Row >
                            <CardTitle>
                                <div className="textCenter">
                                    {day}
                                </div>
                            </CardTitle>
                        </Row>
                        <Row>
                            {/* <CardImg src={icon}> */}
                            <img src={icon} alt="alt"></img>
                            {/* </CardImg> */}
                        </Row>
                        <Row>
                            <strong>{tempMax}&deg;</strong>/{tempMin}&deg;
                                           </Row>
                    </CardBody>
                </Card>
            </button>
        </Col >

    );
};

export default WeatherListItem;