import React from 'react';
import './WeatherCard.scss';

function WeatherCard(props) {
	const { forecast, data } = props;

	const formatTemp = (temp) => {
		let degrees = temp * 9 / 5 + 32;
		let degreesFormatted = degrees.toFixed(0);
		return degreesFormatted;
	};
	return (
		<div className='forecast-container'>
			{forecast && (
				<div className='current-conditions'>
					<h2>Current Conditions</h2>
					<p>Current Temp: {formatTemp(forecast[0].the_temp)}&deg;F</p>
					<p>Current Wind = {forecast[0].wind_speed.toFixed(2)} mph</p>
				</div>
			)}
			<div className='forecast'>
				{forecast &&
					forecast.slice(0,5).map((day, idx) => {
						return (
							<div key={idx} className='day'>
								<p>
									{' '}
									<span>Date:</span>
									{day.applicable_date.slice(6)}
								</p>
								<p>
									<span>High:</span>
									{formatTemp(day.max_temp)}&deg;F
								</p>
								<p>
									<span>Low:</span>
									{formatTemp(day.min_temp)}&deg;F
								</p>
								<p>
									<span>Humidity:</span>
									{day.humidity}%
								</p>
								<p>{day.weather_state_name}</p>
								<img
									className='weatherImage'
									src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
								/>
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
