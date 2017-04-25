import React, { Component } from 'react';
import moment from 'moment';
import Slider from 'react-slick';
import { getWeatherIcon } from '../icons.js';
import Details from './Details';
import ChartTemp from './ChartTemp';

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
      arrows: true
    };
    return (
      <div className="aside">
        <Slider {...settings}>
          <div className="slide">
            <Details weather={this.props.details}/>
          </div>
          <div className="slide">
            <ChartTemp temperature={hourTemp} hours={hours}/>
          </div>
          <div className="slide">3</div>
          <div className="slide">4</div>

        </Slider>
      </div>
    );
  }
}

export default Aside;


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


// <div className="table-responsive">
//         <table className="table">
//           <thead>
//             <tr>
//               {
//                 weather.map((hour, i) => {
//                   const time = new Date(hour.time * 1000);
//                   return <th key={i}>{moment(time).locale('pl').format('LT')}</th>;
//                 })
//               }
//             </tr>
//           </thead>  
//           <tbody>  
//             <tr>
//               {
//                 weather.map((hour, i) => {
//                   return <th key={i}><i className={getWeatherIcon(hour.icon)}></i></th>;
//                 })
//               }
//             </tr>
//             <tr>
//               {
//                 weather.map((hour, i) => {
//                   return <th key={i}>{Math.floor(hour.temperature)}&deg;C</th>;
//                 })
//               }
//             </tr>
//           </tbody>  
//         </table>
//       </div>
