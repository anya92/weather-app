import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { getLocation } from '../weatherApi';
import { API_KEY } from '../config';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      location: {},
      error: '',
      weather: {}
    };
  }

  componentDidMount() {
    getLocation
      .then(res => {
        this.setState({
          location: {
            lat: res.lat,
            lon: res.lon
          }
        });
        const url = `https://api.darksky.net/forecast/${API_KEY}/${res.lat},${res.lon}?lang=pl`;
        console.log(url);
        fetchJsonp(url)
          .then(res => res.json())
          .then(json => {
            this.setState({ 
              loading: false,
              weather: json 
            });
          })
          .catch(error => this.setState({ error })); 
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <p>{this.state.error}</p>
        {
          this.state.loading 
          ? <div id="loading"></div>
          : <div>
            
          </div>
        }
      </div>
    );
  }
}

export default App;
