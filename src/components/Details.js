import React from 'react';

const Details = (props) => {
  const { weather } = props;
  const precipType = weather.precipType ? (weather.precipType === 'rain' ? 'deszcz' : 'śnieg') : 'opady';
  return (
    <div className="details">
      <h3>Szczegółowa pogoda</h3>
      <div className="row">
        <div className="col-xs-6">
          <h4>Temperatura odczuwalna</h4>
          <i className="wi wi-thermometer"></i> {Math.round(weather.apparentTemperature)}&deg;C
        </div>
        <div className="col-xs-6">
          <h4>Szansa na <br/> {precipType}</h4>
          <i className="wi wi-raindrops"></i> {Math.round(weather.precipProbability * 100)}%
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
            <h4>Zachmurzenie</h4>
            <i className="wi wi-cloudy"></i> {Math.round(weather.cloudCover * 100)}%
          </div>
      <div className="col-xs-6">
          <h4>Wilgotność</h4>
          <i className="wi wi-humidity"></i> {Math.round(weather.humidity * 100)}%
        </div>
        
      </div>
        <div className="row">
        <div className="col-xs-6">
            <h4>Ciśnienie</h4>
            <i className="wi wi-barometer"></i> {Math.round(weather.pressure)} hPa
          </div>
      <div className="col-xs-6">
          <h4>Prędkość wiatru</h4>
          <i className="wi wi-strong-wind"></i> {Math.round(weather.windSpeed * 3.6)} km/h
        </div>
        
      </div>
    </div>
  );
};

export default Details;
