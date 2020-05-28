import React from 'react';

import Weather from './components/Weather/Weather';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './App.css'

class App extends React.Component {
  state = {
    lat: '',
    lon: '',
    errorMessage: ''
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => this.setState({ lat: coords.latitude, lon: coords.longitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="ui active dimmer">
          <h1 style={{ color: 'white' }}>Error: {this.state.errorMessage}</h1>
        </div>
      )
    }

    if (!this.state.errorMessage && (this.state.lat && this.state.lon)) {
      return (
        <div className="App">
          <Weather
            lat={this.state.lat}
            lon={this.state.lon}
          />
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
