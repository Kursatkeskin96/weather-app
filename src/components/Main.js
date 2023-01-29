import { BsSun } from 'react-icons/bs'

 function Main({info, state}) {
  return (
<div>
{
  state ?    <div className="wrapper">
  <div className="icon">
  <p id="sun"><BsSun /></p>
  <h3>{Math.floor(info.main.temp)}°C</h3>
  </div>
  <div className="city-name">
  <h2 className="city-h">{info.name}</h2>
  <p className="bigger-p">{info.weather[0].description}</p>
  <p className="lower-p">Feels Like: {Math.floor(info.main.feels_like)}°C</p>
  </div>
</div> : null 
 }
</div>
  )
}

export default Main;