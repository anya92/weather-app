import React, { Component } from 'react';
import Slider from 'react-slick-with-mobile-in-mind';

import Details from './Details';
import NextHours from './NextHours';
import NextDays from './NextDays';

class Aside extends Component {
  render() {
    const { details, hourly, daily } = this.props; 
    const settings = {
      dots: true,
      arrows: false,
      infinite: false
    };
    return (
      <div className="aside row">
        <Slider {...settings}>
          <div className="slide">
            <Details details={details} />
          </div>
          <div className="slide">
            <NextHours hourly={hourly} />
          </div>
          <div className="slide">
            <NextDays daily={daily} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Aside;
