import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import WeatherService from './services/weather-service';
import {WeatherServiceProvider} from './components/weather-service-context';
import store from './store';

const weatherService = new WeatherService();

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <WeatherServiceProvider value={weatherService}>
          <Router>
            <App />
          </Router>
        </WeatherServiceProvider>
      </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
  );
