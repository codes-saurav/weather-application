   import React, { useState } from 'react';


   import { fetchWeather } from './api/fetchWeather';

   import './style.css';
   require('dotenv').config();

   const App = () => {
       const [query, setQuery] = useState('');
       const [weather, setWeather] = useState({});

       const search = async(e) => {
           const data = await fetchWeather(query);

           setWeather(data);
           setQuery('');
       }

       return ( <div className = "main-container" >
           <h1> The Weather Channel </h1>

           <p className = "line" > Welcome!, Please enter a city or country to get the most accurate weather forecast. </p> <
           input type = "text"
           className = "search"
           placeholder = "Search..."
           value = { query }
           onChange = {
               (e) => setQuery(e.target.value) }
           /> {
               weather.main && ( <div className = "city">
                   <h2 className = "city-name" >
                   <span > { weather.name } </span> 
                   <sup > { weather.sys.country } </sup>
                    </h2> 
                    <div className = "city-temp" > { Math.round(weather.main.temp) } 
                    <sup > &deg;C </sup> 
                    </div> 
                    <div className = "info" >
                   <
                   img className = "city-icon"
                   src = { `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }
                   alt = { weather.weather[0].description }
                   />
                    <p> { weather.weather[0].description } </p> 
                    </div>
                     </div>
               )
           } 
           <button className = "btn"
           type = "submit"
           onClick = { search } > < i class = "fa fa-search" / > Search </button>
            </div>
       );
   }

   export default App;