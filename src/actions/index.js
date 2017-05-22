import axios from 'axios';

const API_KEY = "6a78596d062df7838eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEAHTER = 'FETCH_WEAHTER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},nz`;
	const request = axios.get(url);

	return {
		type: FETCH_WEAHTER,
		payload: request
	}
}
