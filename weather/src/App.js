import React, { useEffect, useState } from 'react';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import axios from 'axios';
import Header from './components/Header/Header';

function App() {
	const [ data, setData ] = useState({});

	useEffect(() => {
        console.log('useEffect Hit')
		const id = '2383660';
		axios
			.get(`https://weatherapi.mtrew.now.sh/api/getweather?id=${id}`)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='App'>
			<Header />
			<MainPage data={data} />
		</div>
	);
}

export default App;
