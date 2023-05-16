import Reac,{ useState, useEffect } from 'react';
import './WeatherTopLeft.scss';

import { ReactComponent as Cloud } from '../../assets/SVG/cloud.svg';
import { ReactComponent as Humidity } from '../../assets/SVG/humidity.svg';
import { ReactComponent as CloudDay } from '../../assets/SVG/cloudy-day.svg';
import { ReactComponent as CloudNight } from '../../assets/SVG/cloudy-night.svg';
import { ReactComponent as ArrowLeft } from '../../assets/SVG/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/SVG/arrow_right.svg';
import { ReactComponent as Lightning } from '../../assets/SVG/lightning.svg';
import { ReactComponent as MapPin } from '../../assets/SVG/map-pin.svg';
import { ReactComponent as Mist } from '../../assets/SVG/mist.svg';
import { ReactComponent as Moon } from '../../assets/SVG/moon.svg';
import { ReactComponent as Rainy } from '../../assets/SVG/rainy.svg';
import { ReactComponent as Snow } from '../../assets/SVG/snow.svg';
import { ReactComponent as Sun } from '../../assets/SVG/sun.svg';
import { ReactComponent as Thermo } from '../../assets/SVG/thermo.svg';
import { ReactComponent as Wind } from '../../assets/SVG/wind.svg';


const WeatherTopLeft = ({weatherData,newCity,setNewCity,updatedCity,setUpdatedCity,errorSearch}) => {
    const { name, main, weather} = weatherData;
    const { temp, feels_like, humidity } = main;

    const icons = {
      '01d': <Sun />,
      '01n': <Moon />,
      '02d': <CloudDay />,
      '02n': <CloudNight />,
      '03d': <Cloud />,
      '03n': <Cloud />,
      '04d': <Cloud />,
      '04n': <Cloud />,
      '09d': <Rainy />,
      '09n': <Rainy />,
      '10d': <Rainy />,
      '10n': <Rainy />,
      '11d': <Lightning />,
      '11n': <Lightning />,
      '13d': <Snow />,
      '13n': <Snow />,
      '50d': <Mist />,
      '50n': <Mist />,
    };


    const changeCity = (e) => {

      // const new = e.target.value;
      e.preventDefault();      
      // console.log(e);
      // console.log(e.target);
      // console.log(e.target.value);
      setUpdatedCity(newCity);
    }

    const changeCity1 = (e) => {
      // console.log(e);
      // console.log(e.target);
      // console.log(e.target.value);
      setNewCity(e.target.value);
    }

  return (
    <div className='weather-info'>
        {console.log(weatherData)}
        <div className='weather-info__description'>{weather[0].description}</div>
        <div className='weather-info__city'>{name}</div>
        <div className='weather-info__date'>Saturday</div>
        <div className='weather-info__time'>5:41</div>
        <div className='weather-info__temperature'>{temp}</div>
        <div className='weather-info__units-f'>Display F</div>
        <div className='weather-info__units-c'>Display C</div>

        <div className='weather-info__icon'>
        {icons[weather[0].icon]}
        </div>
        <form className='search-box' onSubmit={changeCity}>
          <input 
            placeholder='Search for a city ...'
            className='search-box__input'
            type="text" 
            value={newCity}
            onChange={changeCity1}
          />
          <div className='search'></div>
        </form>
        {errorSearch && <div className="error-msg">
          Location Not Found <br />Search must be in the form of City
        </div>} 
    </div>
  )
}

export default WeatherTopLeft