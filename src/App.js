import React from 'react';

import Weather from './components/Weather/Weather';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import SummerBackground from './assets/images/summer-image.jpg';
import AutumnBackground from './assets/images/autumn-image-mobile.jpg';
import WinterBackground from './assets/images/winter-image-mobile.jpg';
import SpringBackground from './assets/images/spring-image-mobile.jpg';
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
      return AutumnBackground;
    } else if(month >= 5 && month <= 7) {
      return WinterBackground;
    } else if(month >= 8 && month <= 10) {
      return SpringBackground;
    } else if((month >= 0 && month <= 1) 
    || month === 11) {
      return SummerBackground;
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
