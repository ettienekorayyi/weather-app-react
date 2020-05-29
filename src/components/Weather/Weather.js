import React from 'react';
import { connect } from 'react-redux';

import WeatherDetails from '../WeatherDetails/WeatherDetails';
import Temperature from '../Temperature/Temperature';
import Location from '../Location/Location';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getWeatherData } from '../../actions';

class Weather extends React.Component {
  componentDidMount() {
    const { lat, lon } = this.props;

    this.props.getWeatherData(lat, lon);
  }

  renderResult = () => {
    const { data, date } = this.props;
    
    if(data !== undefined && data.sys !== undefined) {
      let location = `${data.name}, ${data.sys.country}`;
      
      return (
        <div className="weather">
          <Location
            location={location}
            currentDate={date}
          />
          <Temperature currentTemp={Math.ceil(data.main.temp)} />
          <WeatherDetails 
            weatherDetail={data.weather[0].main}
            image={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
        </div>
      );
    } 

    return <LoadingSpinner />;
  };

  render() {
    return(
      <div>
        { this.renderResult() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.weather
  };
};

export default connect(mapStateToProps, { getWeatherData })(Weather);
