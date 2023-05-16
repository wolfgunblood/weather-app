import React, { useState, useEffect } from 'react';
import './App.css';

import WeatherTopLeft from './components/WeatherTopLeft/WeatherTopLeft';
import WeatherTopRight from './components/WeatherTopRight/WeatherTopRight';
import WeatherBottom from './components/WeatherBottom/WeatherBottom';
import WeatherData from './utils/sampleWeatherData';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as Loading } from '../src/assets/SVG/loading.svg'
import { ReactComponent as Loading2 } from '../src/assets/SVG/loading2.svg'



const weatherApiKey = import.meta.env.VITE_API_KEY;

const App = () => {

  const [newCity, setNewCity] = useState('');
  const [updatedCity, setUpdatedCity] = useState('Seoul');
  const [weatherData, setWeatherData] = useState(WeatherData);
  const [errorSearch, setErrorSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (city) => {
    try {
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=current,minutely,hourly,alerts&appid=${weatherApiKey}&units=metric`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${weatherApiKey}`);
      // const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?q=${city}&lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${weatherApiKey}&units=metric}`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}}&units=metric`);

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);

      if (!response.ok) {
        setErrorSearch(true);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setWeatherData(data);
      setErrorSearch(false);

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchWeatherData(updatedCity);
    // fetchWeatherData('Delhi');
    // console.log(weatherData);
    // fetchWeatherData('New York');
  }, [updatedCity])

  const animations = {
    initial: { opacity: 0, y: 20 },
    final: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };

  return (
    <div className='app'>

      <div className='top'>
        <WeatherTopLeft
          className="left"
          weatherData={weatherData}
          newCity={newCity}
          setNewCity={setNewCity}
          updatedCity={updatedCity}
          setUpdatedCity={setUpdatedCity}
          errorSearch={errorSearch}
        />
        <WeatherTopRight
          className="right"
          weatherData={weatherData}
          updatedCity={updatedCity}
          setUpdatedCity={setUpdatedCity}
        />
      </div>
      <div className='bottom'>
        {console.log(updatedCity)}
        <WeatherBottom
          updatedCity={updatedCity}
          setUpdatedCity={setUpdatedCity}
        />
      </div>
    </div>
  )
}

export default App