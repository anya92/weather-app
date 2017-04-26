import React, { Component } from 'react';
import moment from 'moment';
import Slider from 'react-slick-with-mobile-in-mind';

import Details from './Details';
import NextHours from './NextHours';

class Aside extends Component {
  render() {
    const { weather } = this.props; 
    let hourTemp = [], hours = [];
    weather.forEach(hour => {
      hourTemp.push(hour.temperature);
      hours.push(moment(hour.time * 1000).locale('pl').format('LT'));
    });
    const settings = {
      dots: true,
      arrows: false,
      infinite: false
    };
    return (
      <div className="aside row">
        <Slider {...settings}>
          <div className="slide">
            <Details weather={this.props.details}/>
          </div>
          <div className="slide">
            <NextHours weather={weather}/>
          </div>
          <div className="slide">
            3
          </div>
          <div className="slide">4</div>

        </Slider>
      </div>
    );
  }
}

export default Aside;
