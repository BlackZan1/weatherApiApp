import React from 'react';
import style from './Weather.module.css';

class Weather extends React.Component {
    render () {
        return (
            <div className={style.Weather}>
                { this.props.cityName && // Аналогия if для UI
                    <div>
                        <p>City: {this.props.cityName}</p>
                        <p>Cloudiness: {this.props.clouds[0]}, {this.props.clouds[1]}</p>
                        <p>Temperature: {`${this.props.temp}°C`}</p>
                        <p>Sunrise: {this.props.sunrise}</p>
                        <p>Sunset: {this.props.sunset}</p>
                        <p>Pressure: {this.props.pressure} hpa</p>
                    </div>
                }
                <p>{this.props.error}</p>
            </div>
        );
    }
};

export default Weather;