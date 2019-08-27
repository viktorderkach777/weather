import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FirstPage, SecondPage } from '../pages';

class App extends Component {

    render() {
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

export default App;