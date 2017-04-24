import React, { Component } from 'react';
import moment from 'moment';
import { getWeatherIcon } from '../icons.js';

class Hourly extends Component {
  render() {
    const { weather } = this.props; 
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {
                weather.map((hour, i) => {
                  const time = new Date(hour.time * 1000);
                  return <th key={i}>{moment(time).locale('pl').format('LT')}</th>;
                })
              }
            </tr>
          </thead>  
          <tbody>  
            <tr>
              {
                weather.map((hour, i) => {
                  return <th key={i}><i className={getWeatherIcon(hour.icon)}></i></th>;
                })
              }
            </tr>
            <tr>
              {
                weather.map((hour, i) => {
                  return <th key={i}>{Math.floor(hour.temperature)}&deg;C</th>;
                })
              }
            </tr>
          </tbody>  
        </table>
      </div>
    );
  }
}

export default Hourly;


 // <div>
 //      {
 //        weather.map((hour, i) => {
 //          const time = new Date(hour.time * 1000);
 //          return(
 //            <div key={i} className="hourly">
 //              <strong>{moment(time).locale('pl').format('LT')}</strong>
 //              <i className={getWeatherIcon(hour.icon)}></i>
 //              <p>{Math.floor(hour.temperature)}&deg;C</p>

 //            </div>
 //          );
          
 //        })
 //      }
 //      </div>
