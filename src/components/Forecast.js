import React, { Component } from 'react';
import SingleDay from './SingleDay';

class Forecast extends Component {
  render() {
    const { weather } = this.props;
    return (
      <div>
        <h2>Prognoza</h2>
        <ul className="list-group">
        {
          weather.data.map((day, i) => {
            return <SingleDay key={i} day={day}/>;
          })
        }
        </ul>
      </div>
    );
  }
}

export default Forecast;
