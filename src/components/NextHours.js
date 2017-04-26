import React from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

const NextHours = (props) => {
  const { weather } = props;
  return (
    <div className="next-hours">
      <h3>Prognoza godzinowa</h3>
      <ul className="list-group">
        {
          weather.map((hour, i) => {
            return (
              <li key={i} className="list-group-item">
                <div className="single-hour">
                  <div className="list-item hour">
                    {moment(hour.time * 1000).locale('pl').format('LT')}
                  </div>
                  <div className="list-item icon">
                    <i className={getWeatherIcon(hour.icon)}></i>
                  </div>
                  <div className="list-item temp">
                    {Math.round(hour.temperature)}&deg;C
                  </div>
                </div>
              </li>
            );
          })
        }  
      </ul>
    </div>
  );
};

export default NextHours;
