import React from 'react';
import './WeatherTopRight.scss'
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

const WeatherTopRight = ({weatherData}) => {
    const { name, main, weather,wind} = weatherData;
    const { temp, feels_like, humidity } = main;
    return (
        <div>
            <div className='weather-details-container'>
                <div className='weather-details'>
                    <div className='weather-details__icon'>
                        <Thermo />
                    </div>

                    <div className='weather-details__info'>
                        <div className='weather-details__label'>Feels Like</div>
                        <div className='weather-details__data' id='thermo'>{feels_like}°C</div>
                    </div>
                </div>
                <div className='weather-details'>
                    <div className='weather-details__icon'>
                        <Humidity />
                    </div>

                    <div className='weather-details__info'>
                        <div className='weather-details__label'>Humidity</div>
                        <div className='weather-details__data' id='humidity'>{humidity}%</div>
                    </div>
                </div>

                <div className='weather-details'>
                    <div className='weather-details__icon'>
                        <Rainy />
                    </div>

                    <div className='weather-details__info'>
                        <div className='weather-details__label'>Chance of Rain</div>
                        <div className='weather-details__data' id='rain'></div>
                    </div>
                </div>

                <div className='weather-details'>
                    <div className='weather-details__icon'>
                        <Wind />
                    </div>

                    <div className='weather-details__info'>
                        <div className='weather-details__label'>Wind Speed</div>
                        <div className='weather-details__data' id='wind'>{wind.speed} km/h</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherTopRight