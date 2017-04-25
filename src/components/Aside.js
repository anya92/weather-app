import React, { Component } from 'react';
import moment from 'moment';
import Slider from 'react-slick';
import { getWeatherIcon } from '../icons.js';
import Details from './Details';

class Aside extends Component {
  render() {
    const { weather } = this.props; 
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
          <div className="slide">2</div>
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
