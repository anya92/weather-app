import React, { Component } from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

class SingleDay extends Component {
  render() {
    const { day } = this.props;
    const date = new Date(day.time * 1000);
    return (
      <div className="single-day col-xs-6 col-md-2">
        <p className="day-name">{(moment(date).locale('pl').format('ddd')).toUpperCase()}</p>
        <i className={getWeatherIcon(day.icon)}></i>
        <p className="temp">{Math.round(day.temperatureMax)}&deg;C</p>
      </div>
    );
  }
}

export default SingleDay;
