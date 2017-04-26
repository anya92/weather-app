import React, { Component } from 'react';
import moment from 'moment';

class NextDays extends Component {
  constructor() {
    super();

    this.state = {
      display: ''
    };
  }

  render() {
    const { daily } = this.props;
    return (
      <div className="next-days">
        <h3>Prognoza na najbliższe dni</h3>
        <div className="nav-icons">
          <i className="wi wi-thermometer active" onClick={() => this.setState({ display: 'temp' })} ref="temp"/>
          <i className="wi wi-sunrise" onClick={() => this.setState({ display: 'sun' })} />
          <i className="fa fa-ellipsis-h" onClick={() => this.setState({ display: 'other' })} />
        </div>
        <ul className="list-group">
          {
            daily.map((day, i) => {
              const date = new Date(day.time * 1000);
              const sunriseTime = new Date(day.sunriseTime * 1000);
              const sunsetTime = new Date(day.sunsetTime * 1000);
              return (
                <li key={i} className="list-group-item">
                  <div className="aside-single-day">
                    <div className="day-name">
                      <p>{moment(date).locale('pl').format('dddd')}</p>
                      <em>{day.summary}</em>
                    </div>

                    {
                      this.state.display === 'temp'
                      ? <div className="icons">
                          <i className="wi wi-thermometer-exterior" />{Math.round(day.temperatureMin)}&deg;C
                          <i className="wi wi-thermometer" />{Math.round(day.temperatureMax)}&deg;C
                          <i className="wi wi-raindrops" />{Math.round(day.precipProbability * 100)}%
                      </div>
                      : <div></div>
                    }
                    {
                      this.state.display === 'sun'
                      ? <div className="icons">
                          <i className="wi wi-sunrise" />{moment(sunriseTime).locale('pl').format('LT')}
                          <i className="wi wi-sunset" />{moment(sunsetTime).locale('pl').format('LT')}
                      </div>
                      : <div></div>
                    }
                    {
                      this.state.display === 'other'
                      ? <div className="icons">
                          <i className="wi wi-strong-wind" />{Math.round(day.windSpeed * 3.6)} km/h
                          <i className="wi wi-barometer" />{Math.round(day.pressure)} hPa
                      </div>
                      : <div></div>
                    }
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default NextDays;
