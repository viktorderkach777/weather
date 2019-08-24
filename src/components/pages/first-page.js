import React from 'react';
import WeatherList from '../weather-list';
import WeatherCity from '../weather-city';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    //CardImg,
    CardBody,
    //CardText,
    //Button
} from 'reactstrap';

const FirstPage = () => {

    return (

        <Container>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Card body outline color="primary">
                        <CardTitle>
                            <WeatherCity />
                        </CardTitle>
                        <CardBody>
                            <Row>
                                <WeatherList />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FirstPage;