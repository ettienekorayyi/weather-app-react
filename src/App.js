import React from 'react';

import Weather from './components/Weather/Weather';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import SummerBackgroundMobile from './assets/images/summer-image.jpg';
import AutumnBackgroundMobile from './assets/images/autumn-image.jpg';
import WinterBackgroundMobile from './assets/images/winter-image.jpg';
import SpringBackgroundMobile from './assets/images/spring-image.jpg';

import './App.css';

class App extends React.Component {
  state = {
    lat: '',
    lon: '',
    date: '',
    month: '',
    errorMessage: ''
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => this.setState({ 
        lat: coords.latitude, 
        lon: coords.longitude, 
        date: new Date().toUTCString(),
        month: new Date().getMonth()
      }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  imageRenderer = () => {
    const { month } = this.state;
    
    if(month >= 2 && month <= 4) {
      return AutumnBackgroundMobile;
    } else if(month >= 5 && month <= 7) {
      return WinterBackgroundMobile;
    } else if(month >= 8 && month <= 10) {
      return SpringBackgroundMobile;
    } else if((month >= 0 && month <= 1) 
    || month === 11) {
      return SummerBackgroundMobile;
    }
  };

  renderContent = () => {
    const { date, errorMessage, lat, lon } = this.state;

    if (errorMessage && !lat) {
      return (
        <div className="ui active dimmer">
          <h1 style={{ color: 'white' }}>Error: {this.state.errorMessage}</h1>
        </div>
      )
    }

    if (!errorMessage && (lat && lon)) {
      return (
        <Weather
            lat={lat}
            lon={lon}
            date={date.substring(0, date.length - 13).toString()}
          />
      );
    }

    return <LoadingSpinner />
  }

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${this.imageRenderer()})` }}>
        { this.renderContent() }
      </div>
    );
  }
}

export default App;
