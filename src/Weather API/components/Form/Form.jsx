import React from 'react';
import style from './Form.module.css';

class Form extends React.Component {
    render () {
        return (
            <div className={style.Form}>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="Add name of your city..."/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
};

export default Form;