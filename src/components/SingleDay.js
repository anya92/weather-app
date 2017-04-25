import React, { Component } from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

class SingleDay extends Component {
  render() {
    const { day } = this.props;
    const date = new Date(day.time * 1000);
    const sunriseTime = new Date(day.sunriseTime * 1000);
    const sunsetTime = new Date(day.sunsetTime * 1000);
    return (
      <div className="single-day list-group-item">
        <p><strong>{moment(date).locale('pl').format('dddd')}</strong><br />
        <span>{day.summary}</span></p>
        <i className={getWeatherIcon(day.icon)}></i>
        <i className="wi wi-sunrise"></i>{moment(sunriseTime).locale('pl').format('LT')}
        <i className="wi wi-sunset"></i>{moment(sunsetTime).locale('pl').format('LT')}
        <i className="wi wi-thermometer-exterior"></i>{day.temperatureMin}&deg;C
        <i className="wi wi-thermometer"></i>{day.temperatureMax}&deg;C
        <i className="wi wi-strong-wind"></i>{day.windSpeed} m/s
        <i className="wi wi-barometer"></i>{day.pressure} hPa
        <i className="wi wi-raindrops"></i>{Math.round(day.precipProbability * 100)}%
      </div>
    );
  }
}

export default SingleDay;
