import React, { Component } from 'react';
import moment from 'moment';

class SingleDay extends Component {
  render() {
    const { day } = this.props;
    const date = new Date(day.time * 1000);
    return (
      <div>
        <p>{moment(date).locale('pl').format('dd')}
        <span>{day.summary}</span></p>
      </div>
    );
  }
}

export default SingleDay;
