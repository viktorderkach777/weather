import React , { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import WeatherService from './services/weather-service';
import {WeatherServiceProvider} from './components/weather-service-context';
import store from './store';
//import App from './components/app';
//import ErrorBoundry from './components/error-boundry';

const App = lazy(() => import('./components/app'));
const ErrorBoundry = lazy(() => import('./components/error-boundry'));

const weatherService = new WeatherService();

ReactDOM.render(
  <Suspense fallback={<div>Завантаження...</div>}>
    <Provider store={store}>
      <ErrorBoundry>
        <WeatherServiceProvider value={weatherService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WeatherServiceProvider>
      </ErrorBoundry>
    </Provider>
    </Suspense>,
    document.getElementById('root')
  );
