import React from 'react';
import style from './Info.module.css';

class Info extends React.Component {
    render () {
        return (
            <div className={style.InfoMain}>
                <h1>Weather App</h1>
                <h3>What's weather in your country</h3>
            </div>
        );
    }
};

export default Info;