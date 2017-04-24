import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { API_KEY } from '../config';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      location: {},
      errors: ''
    };
  }

  componentWillMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        });
      });
    } else {
      this.setState({ errors: 'Geolocation is not supported by this browser.'});
      console.log('error');
    }
    // console.log('getting location');
  }
  getWeather() {
    const { lat, lon } = this.state.location;
    const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
    // console.log(url);
    fetchJsonp(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => console.log(error));    
  }
  // componentDidMount() {
  //   setInterval(() => console.log('test'), 3000);
  //   const { lat, lon } = this.state.location;
  //   const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;
  //   // fetchJsonp()
  //   console.log(lat, lon, this.state.location, this.state.location);
  // }

  render() {
    // this.getLocation();
    if (this.state.location.lon) {
      this.getWeather();
    }
    return (
      <div>
        <h1>Weather App</h1>
        <p>{this.state.errors}</p>
      </div>
    );
  }
}

export default App;
