import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from 'react-accessible-accordion';

import './forecast.styles.css';

const WEEK_DAY = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAY.slice(dayInAWeek, WEEK_DAY.length).concat(
    WEEK_DAY.slice(0, dayInAWeek)
  );

  return (
    <>
      <div className='title'>Daily</div>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt='weather'
                    className='small-icon'
                  />
                  <span className='day'>{forecastDays[idx]}</span>
                  <span className='description'>
                    {item.weather[0].description}
                  </span>
                  <span className='min-max'>
                    {Math.round(item.main.temp_min)} °C /
                    {Math.round(item.main.temp_max)} °C
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details'>
                <div className='daily-details-item'>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className='daily-details-item'>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className='daily-details-item'>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className='daily-details-item'>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className='daily-details-item'>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className='daily-details-item'>
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
