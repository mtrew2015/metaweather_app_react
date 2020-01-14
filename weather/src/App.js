import React, { useEffect, useState } from 'react';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import axios from 'axios';

function App() {
	const [ data, setData ] = useState({});

	useEffect(() => {
		const id = '2487956';
		axios
			.get(`https://weatherapi.mtrew.now.sh/api/getweather?id=${id}`)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='App'>
			<h1>Weather</h1>
			<MainPage data={data} />
		</div>
	);
}

export default App;
