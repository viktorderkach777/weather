import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FirstPage, SecondPage } from '../pages';
import './app.css';
import withWeatherService from '../hoc';


class App extends Component {

    render() {
        // const { weatherService } = this.props;
        // console.log(weatherService.getWeathers());

        return (
            <Switch>
                <Route
                    path="/"
                    component={FirstPage}
                    exact
                />
                <Route
                    path="/second"
                    component={SecondPage}
                    exact
                />
            </Switch>
        )
    }

}

export default withWeatherService()(App);