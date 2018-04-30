import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export class WeatherList extends Component {
  // Recall that cityData is a single element from this.state.weather
  // which is an array of all city data that we keep
  // appending to with each search.
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => { return weather.main.temp });
    const pressures = cityData.list.map(weather => { return weather.main.pressure });
    const humidities = cityData.list.map(weather => { return weather.main.humidity });
    const { lon, lat } = cityData.city.coord;
    // the above is ES6 shorthand equivalent for:
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


/**
    Un-refactored version of mapStateToProps
//
// function mapStateToProps(state) {
//   // recall:
//   // weather: state.weather comes from the following
//   // line in: src/reducers/index.js, which assigns the
//   // weather property to state.
//   //
//   // const rootReducer = combineReducers({
//   //   weather: WeatherReducer
//   // });

//   return { weather: state.weather };
// }
*/

/**
 * Re-factored version uses some ES6 to:
 * 1. Pluck out the .weather property from state
 *    in the method signature, reducing it to: { weather }
 * 2. Reduce the { weather: weather } to simplified ES6
 *    syntax: { weather }, which is used when key and value
 *    the same name.
 */
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);