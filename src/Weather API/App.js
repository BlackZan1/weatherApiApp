import React from 'react';
import Info from './components/Info/Info.jsx';
import Form from './components/Form/Form.jsx';
import Weather from './components/Weather/Weather.jsx';
import getDate from './methods/Date.js';
import style from './App.module.css';

const API_KEY = "4c5df2547da8367d5bb73dd555e5f8e7";

class App extends React.Component {
    state = { // state как объект
        temp: undefined,
        cityName: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        cloudiness: undefined,
        error: 'Add name of city', 
    }

    getWeather = async (event) => {
        event.preventDefault();
    
        const cityName = event.target.elements.city.value;
    
        if(cityName) {
            const API_URL = await 
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    
            const data = await API_URL.json();
            console.log(data);
    
            let sunDate = [];
    
            try {
                sunDate = getDate.getDate(data.sys.sunset, data.sys.sunrise);
            }
            catch(er) {
                sunDate = [undefined, undefined];
            }
    
            if(data.name) {
                this.setState({
                    temp: data.main.temp,
                    cityName: data.name,
                    sunrise: sunDate[1],
                    sunset: sunDate[0],
                    pressure: data.main.pressure,
                    cloudiness: [
                        data.weather[0].main, data.weather[0].description,
                    ],
                    error: undefined,
                });
            } else {
                this.setState({
                    temp: undefined,
                    cityName: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    pressure: undefined,
                    cloudiness: undefined,
                    error: 'Please add right name of city',
                });
            }
        }
        else {
            this.setState({
                temp: undefined,
                cityName: undefined,
                sunrise: undefined,
                sunset: undefined,
                pressure: undefined,
                cloudiness: undefined,
                error: 'Please add name of city',
            });
        }
    }

    render() {
        return (
            <div className={style.AppMain}>
                <div className={style.AppItem}>
                    <Info />

                    <div>
                        <Form getWeather={this.getWeather}/>

                        <Weather temp={this.state.temp} cityName={this.state.cityName} 
                                sunrise={this.state.sunrise} sunset={this.state.sunset} 
                                error={this.state.error} pressure={this.state.pressure}
                                clouds={this.state.cloudiness}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default App;