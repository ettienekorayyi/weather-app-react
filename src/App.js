import React from 'react';

import Location from './components/Location/Location';
import Temperature from './components/Temperature/Temperature';
import Weather from './components/Weather/Weather';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import openweatherapp, { apiKey } from './api/openweatherapp';

import './App.css'


class App extends React.Component {
  state = {
    lat: -33.864691,
    lon: 151.043626,
    errorMessage: '',
    temperature: 0,
    location: '',
    utcDate: '',
    weather: '',
    icon: ''
  };

  async componentDidMount() {
    const { lat, lon } = this.state;
    let date = new Date().toUTCString();
    const len = date.length

    const response = await openweatherapp
      .get(`/weather?lat=${lat}&lon=${lon}&appid=${apiKey.accessKey}&units=metric`);

    this.setState({
      temperature: response.data.main.temp,
      location: `${response.data.name}, ${response.data.sys.country}`,
      weather: response.data.weather[0].main,
      utcDate: date.substring(0, len - 13).toString(),
      icon: response.data.weather[0].icon
    })
    
  }


  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="ui active dimmer">
          <h1 style={{ color: 'white' }}>Error: {this.state.errorMessage.message}</h1>
        </div>
      )
    }

    if (!this.state.errorMessage && this.state.lat) {
      
      return (
        <div className="App">
          <Location
            location={this.state.location}
            currentDate={this.state.utcDate}
          />
          <Temperature currentTemp={Math.ceil(this.state.temperature)} />
          <Weather 
            weather={this.state.weather}
            image={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
          />
        </div>
      );
    }

    return <LoadingSpinner />
  }

  render() {
    console.log(this.state.weatherData)
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
