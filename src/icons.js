export const getWeatherIcon = (icon) => {
  switch(icon) {
    case 'rain':
      return 'wi wi-day-rain';
    case 'partly-cloudy-day':
      return 'wi wi-day-cloudy';
    case 'day-sunny':
      return 'wi wi-day-sunny';
    case 'clear-day':
      return 'wi wi-day-sunny';
    case 'night-clear':
      return 'wi wi-night-clear';
    case 'clear-night':
      return 'wi wi-night-clear';
    case 'snow':
      return 'wi wi-snow';
    case 'sleet':
      return 'wi wi-sleet';
    case 'strong-wind':
      return 'wi wi-strong-wind';
    case 'fog':
      return 'wi wi-fog';
    case 'wind':
      return 'wi wi-strong-wind';
    case 'cloudy':
      return 'wi wi-cloudy';
    case 'day-cloudy':
      return 'wi wi-day-cloudy';
    case 'night-cloudy':
      return 'wi wi-night-alt-cloudy';
    case 'partly-cloudy-night':
      return 'wi wi-night-alt-partly-cloudy';
    case 'hail':
      return 'wi wi-hail';
    case 'thunderstorm':
      return 'wi wi-thunderstorm';
    case 'tornado':
      return 'wi wi-tornado';
    default:
      return '';  
  }
};
