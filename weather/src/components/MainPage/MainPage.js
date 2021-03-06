import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './MainPage.scss'
function MainPage(props) {
	const { data } = props;
	return (
		<div className="container">
			{data.parent && (
				<h1>
					Weather For {data.title}, {data.parent.title}{' '}
				</h1>
			)}
			<WeatherCard data={props.data} forecast={data.consolidated_weather} />
		</div>
	);
}

export default MainPage;
