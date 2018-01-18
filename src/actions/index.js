import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => { // eslint-disable-line
    const url = `${process.env.API_URL}?q=${encodeURI(city)},us&appid=${process.env.API_KEY}`
    axios.get(url)
        .then(reply => console.log(reply)) // eslint-disable-line
    return { type: FETCH_WEATHER }
}
