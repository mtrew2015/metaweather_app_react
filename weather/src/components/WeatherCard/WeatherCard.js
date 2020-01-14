import React from 'react';
import './WeatherCard.scss'

function WeatherCard(props) {
	const { forecast, data } = props;

	const formatTemp = (temp) => {
		let degrees = temp * 9 / 5 + 32;
		let degreesFormatted = degrees.toFixed(2);
		return degreesFormatted;
	};
	return (
        <div>
            { forecast &&
			<div className='current-conditions'>
                <h2>Current Conditions</h2>
                    <p>Current Temp: {formatTemp(forecast[0].the_temp)}&deg;F</p>
                    <p>Current Windspeed = {forecast[0].wind_speed.toFixed(2)} mph</p>
				
			
            </div>
            }
			<div className='forecast'>
				{forecast &&
					forecast.map((day) => {
						return (
                            <div className="day">
								<p>Date: {day.applicable_date}</p>
								<p>High:{formatTemp(day.max_temp)}&deg;F</p>
								<p>Low:{formatTemp(day.min_temp)}&deg;F</p>
								<p>Humidity {day.humidity}%</p>
                                <p>Expected Conditions:{day.weather_state_name}</p>
                                <img className="weatherImage" src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}>
                                </img>
                                <p>
                                {day.wind_direction_compass} at {day.wind_speed.toFixed(2)} mph
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default WeatherCard;

//
