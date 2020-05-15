import React from 'react';

import Location from './components/Location/Location';
import Temperature from './components/Temperature/Temperature';
import Weather from './components/Weather/Weather';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import './App.css'


class App extends React.Component {
  state = { lat: null, lon: null, errorMessage: '' };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }), // 
      (err) => this.setState({ errorMessage: err })); 
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
          <Location />
          <Temperature />
          <Weather />
        </div>
      );
    }

    return <LoadingSpinner />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
