import React, { useEffect } from "react";
import { BsSun, BsCloud, BsCloudSnow, BsCloudRain } from 'react-icons/bs'
import cloudy from './images/cloudy.jpg';
import rainy from './images/rainy.jpg'
import snowy from './images/snowy.jpg'
import sunny from './images/sunny.jpg'
import mist from './images/mist.jpg'


function Main({info, state}) {


  let icon;
  

  useEffect(() => {
    let background;
    if (info && info.weather) {
      let description = info.weather[0].description;
      switch (true) {
        case description.includes("cloud"):
          background = cloudy;
          break;
        case description.includes("snow"):
          background = snowy;
          break;
        case description.includes("mist"):
          background = mist;
          break;
        case description.includes("rain"):
          background = rainy;
          break;
        default:
          background = sunny;
      }
      document.body.style.backgroundImage = `url(${background})`;
    }
  }, [info])


  if (info && info.weather) {
    let description = info.weather[0].description;
    switch (true) {
      case description.includes("cloud"):
        icon = <BsCloud />;
        break;
      case description.includes("snow"):
        icon = <BsCloudSnow />;
        break;
      case description.includes("rain"):
        icon = <BsCloudRain />;
        break;
      default:
        icon = <BsSun />;
    }
  }


  return (
    <div>
      {
        state ?   <div className="wrapper">
        <div className="icon">
        <p id="sun">{icon}</p>
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
