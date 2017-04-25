import React, { Component } from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

class Current extends Component {
  render() {
    const { weather, cityName } = this.props;
    const date = new Date(weather.time * 1000);
    return (
      <div className="current">
        <p className="time">{(moment(date).locale('pl').format('dddd')).toUpperCase()},<br/>{moment(date).locale('pl').format('LL')}</p>
        <h1 className="city-name">{cityName}</h1>
        <p className="summary">{weather.summary}</p>
        <div className="row">
          <p className="col-xs-6 temp">{Math.floor(weather.temperature)}&deg;C</p>
          <i className={getWeatherIcon(weather.icon)}></i>
        </div>
        
      </div>
    );
  }
}

export default Current;
