import React, { Component } from 'react';
import moment from 'moment';

class Current extends Component {
  render() {
    const { weather, cityName } = this.props;
    const date = new Date(weather.time * 1000);
    return (
      <div>
        <p>{moment(date).locale('pl').format('dddd')}, {moment(date).locale('pl').format('LL')}</p>
        <p>{cityName}</p>
        <p>{weather.summary}</p>
      </div>
    );
  }
}

export default Current;
