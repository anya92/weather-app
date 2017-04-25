import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { getLocation } from '../weatherApi';
import { API_KEY } from '../config';
import sampleData from '../sample-data';

import Current from './Current';
import Forecast from './Forecast';
import Aside from './Aside';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      location: {},
      error: '',
      cityName: '',
      weather: sampleData
    };
  }

  componentDidMount() {
    getLocation
      .then(res => {
        const { lat, lon } = res;
        // const lat = 50.34802, lon = 18.93282;
        this.setState({
          location: {
            lat,
            lon
          }
        });
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=false`)
          .then(res => res.json())
          .then(json => {
            this.setState({ cityName: json.results[0].address_components[2].short_name, loading: false });
          });
        const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}?lang=pl&units=si`;
        console.log(url);
        // fetchJsonp(url)
        //   .then(res => res.json())
        //   .then(json => {
        //     this.setState({ 
        //       loading: false,
        //       weather: json 
        //     });
        //   })
        //   .catch(error => this.setState({ error })); 
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { weather } = this.state;
    return (
      <div>
        <p>{this.state.error}</p>
        {
          this.state.loading 
          ? <div id="loading"></div>
          : <div className="container">
              <div className="col-md-8">
              <Current 
                weather={weather.currently} 
                cityName={this.state.cityName}
              />
              <Forecast 
                weather={weather.daily.data.slice(1,7)}
              />
              </div>
              <div className="col-md-4">
                <Aside 
                weather={weather.hourly.data.slice(0, 24)}
                details={weather.currently}
              />
              </div>
               
             
              
          </div>
        }
      </div>
    );
  }
}

export default App;



