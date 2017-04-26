import React, { Component } from 'react';
import SingleDay from './SingleDay';

class Forecast extends Component {
  render() {
    const { daily, summary } = this.props;
    return (
      <div className="forecast row">
      <h2>Prognoza</h2>
      <p>{summary}</p><hr/>
        <div className="row">
        {
          daily.map((day, i) => {
            return <SingleDay key={i} day={day}/>;
          })
        }
        </div><hr/>
      </div>
    );
  }
}

export default Forecast;
