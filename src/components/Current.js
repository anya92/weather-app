import React, { Component } from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

class Current extends Component {
  render() {
    const { weather, cityName } = this.props;
    const date = new Date(weather.time * 1000);
    return (
      <div>
        <p>{moment(date).locale('pl').format('dddd')}, {moment(date).locale('pl').format('LL')}</p>
        <p>{cityName}</p>
        <p>{weather.summary}</p>
        <i className={getWeatherIcon(weather.icon)}></i>
      </div>
    );
  }
}

export default Current;
