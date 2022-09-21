import React from 'react';

import './current-weather.styles.css';

const CurrentWeather = ({ data }) => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{data.cityInfo}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt='weather'
          className='weather-icon'
        />
      </div>
      <div className='bottom'>
        <div className='temperature'>{Math.round(data.main.temp)} °C</div>
        <div className='details'>
          <div className='row'>
            <span className='label'>Details</span>
          </div>
          <div className='row'>
            <span className='label'>Feels like</span>
            <span className='value'>{Math.round(data.main.feels_like)} °C</span>
          </div>
          <div className='row'>
            <span className='label'>Winds</span>
            <span className='value'>{data.wind.speed} m/s</span>
          </div>
          <div className='row'>
            <span className='label'>Humidity</span>
            <span className='value'>{data.main.humidity}%</span>
          </div>
          <div className='row'>
            <span className='label'>Pressure</span>
            <span className='value'>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=38068b1b211612793b9646e869809942

// http://api.openweathermap.org/data/2.5/forecast?q=London&appid=38068b1b211612793b9646e869809942
