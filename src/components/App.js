import React, { Component } from 'react';

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
    let lat = null, lon = null;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        this.setState({
          location: {
            lat,
            lon
          }
        });
      });
    } else {
      this.setState({ errors: 'Geolocation is not supported by this browser.'});
    }
  }

  render() {
    return (
      <div>
        <h1>Weather App</h1>
      </div>
    );
  }
}

export default App;
