import React, { Component } from 'react';
import SingleDay from './SingleDay';

class Forecast extends Component {
  render() {
    const { weather } = this.props;
    return (
      <div className="forecast">
      <h2>Prognoza</h2>
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
