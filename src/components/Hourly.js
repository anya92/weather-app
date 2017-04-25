import React, { Component } from 'react';
import moment from 'moment';
import Slider from 'react-slick';
import { getWeatherIcon } from '../icons.js';
import Details from './Details';

class Hourly extends Component {
  render() {
    const { weather } = this.props; 
    const settings = {
      dots: true,
      arrows: true
    };
    return (
      <div className="aside">
        <Slider {...settings}>
          <div><Details /></div>
          <div>2</div>
          <div>3</div>
          <div>4</div>

        </Slider>
      </div>
    );
  }
}

export default Hourly;


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
