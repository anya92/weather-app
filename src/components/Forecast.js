import React, { Component } from 'react';
import SingleDay from './SingleDay';

class Forecast extends Component {
  render() {
    const { weather } = this.props;
    console.log(weather);
    return (
      <div className="forecast">
        <div className="row">
        {
          weather.map((day, i) => {
            return <SingleDay key={i} day={day}/>;
          })
        }
        </div>
      </div>
    );
  }
}

export default Forecast;
