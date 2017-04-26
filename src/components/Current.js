import React, { Component } from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

class Current extends Component {
  render() {
    const { weather, cityName } = this.props;
    const date = new Date(weather.time * 1000);
    return (
      <div className="current row">
        <p className="time">{(moment(date).locale('pl').format('dddd')).toUpperCase()},<br/>{moment(date).locale('pl').format('LL')}</p>
        <h1 className="city-name"><span><i className="fa fa-map-marker"></i></span>{cityName}</h1>
        <p className="summary">{weather.summary}</p>
        <div className="row">
          <p className="col-xs-6 temp">{Math.round(weather.temperature)}&deg;C</p>
          <div className="col-xs-6">
            <i className={getWeatherIcon(weather.icon)}></i>
          </div>  
        </div>
        
      </div>
    );
  }
}

export default Current;
