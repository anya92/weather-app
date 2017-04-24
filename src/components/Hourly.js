import React, { Component } from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

class Hourly extends Component {
  render() {
    const { weather } = this.props; 
    return (
      <div>
      {
        weather.map((hour, i) => {
          const time = new Date(hour.time * 1000);
          return(
            <div key={i} className="hourly">
              <strong>{moment(time).locale('pl').format('LT')}</strong>
              <i className={getWeatherIcon(hour.icon)}></i>
              <p>{Math.floor(hour.temperature)}&deg;C</p>

            </div>
          );
          
        })
      }
      </div>
    );
  }
}

export default Hourly;
