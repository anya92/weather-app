import React, { Component } from 'react';
import SingleDay from './SingleDay';

class Forecast extends Component {
  render() {
    const { weather } = this.props;
    return (
      <div>
        <h2>Forecast</h2>
        <p>{weather.summary}</p>
        {
          weather.data.map((day, i) => {
            return <SingleDay key={i} day={day}/>;
          })
        }
      </div>
    );
  }
}

export default Forecast;
