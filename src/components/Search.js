import { useState } from 'react'
import axios from 'axios';

function Search({setInfo, setState}) {

  const [city, setCity] = useState ('');

  const handleChange = async () => {
    const api = "59d2627c5822f0048f965f774b1a5a5b";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    await axios(baseUrl).then(res => setInfo(res.data));
    setState(true);

  }
  return (
    <div>
        <h1 id="weather-app">Weather App</h1>
        <form onSubmit= {(e) => {e.preventDefault(); handleChange()}}>
    <div className="search-input">
        <input onChange={(e)=> setCity(e.target.value)} className="input" type="text" placeholder="Enter a city..."></input>
    </div>
    <div className="btnDiv">
      <button type="submit" className="btn">Submit</button>
    </div>
    </form>
    </div>
  )
}

export default Search;