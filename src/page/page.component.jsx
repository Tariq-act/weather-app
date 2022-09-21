import React, { useState } from 'react';
import CurrentWeather from '../components/current-weather/current-weather.component';
import Forecast from '../components/forecast/forecast.component';

import Header from '../components/header/header.component';
import Search from '../components/search/search.component';
import Spinner from '../components/spinner/spinner.component';

import './page.styles.css';

const Page = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocation = async (searchData) => {
    try {
      setLoading(true);
      const current = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const forecast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchData}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      setLoading(false);

      const currentRes = await current.json();
      const forecastRes = await forecast.json();
      setCurrentWeather({
        cityInfo: `${currentRes.name}, ${currentRes.sys.country}`,
        ...currentRes,
      });
      setForecast({
        cityInfo: `${forecastRes.city.name}, ${forecastRes.city.country}`,
        ...forecastRes,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Search onSearchSubmit={fetchLocation} />

      <div className='page'>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {!currentWeather && !forecast && (
              <h1 style={{ textAlign: 'center', marginTop: '10rem' }}>
                No Result with this name
              </h1>
            )}
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
          </>
        )}
      </div>
    </>
  );
};

export default Page;
