import React from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import Temperature from '../Temperature/Temperature';
import Location from '../Location/Location';
import openweatherapp, { apiKey } from '../../api/openweatherapp';

class Weather extends React.Component {
  state = {
    sysId: 0,
    errorMessage: '',
    temperature: 0,
    location: '',
    utcDate: '',
    weather: '',
    icon: ''
  };

  async componentDidMount() {
    const { latitude, longhitude } = this.props;

    let date = new Date().toUTCString();
    const len = date.length

    const response = await openweatherapp
      .get(`/weather?lat=${latitude}&lon=${longhitude}&appid=${apiKey.accessKey}&units=metric`); 

    this.setState({
      temperature: Math.ceil(response.data.main.temp),
      location: `${response.data.name}, ${response.data.sys.country}`,
      weather: response.data.weather[0].main, 
      utcDate: date.substring(0, len - 13).toString(),
      icon: response.data.weather[0].icon, 
      sysId: response.data.sys.id
    })
  }

  render() {
    return (
      <div className="weather">
        <Location
          location={this.state.location}
          currentDate={this.state.utcDate}
        />
        <Temperature currentTemp={this.state.temperature} />
        <WeatherDetails  //
          weatherDetail={this.state.weather}
          image={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
        />
      </div>
    );
  }
}

export default Weather;
