import React, { useContext } from 'react'
import ThemeContext from '../../Context/Context'
import axios from 'axios'
import styles from './styles.module.css'

function Cities() {

  const {
    city_name,
    temp, setTemp,
    city, setCity,
    setCity_name,
    country, setCountry,
    condition, setCondition,
    feels_like, setFeels_like,
    update, setUpdate,
    source, setSource
  } = useContext(ThemeContext)

  axios(`https://api.weatherapi.com/v1/current.json?key=a93d3413df7840d3a02183035231901&q=${city_name}&aqi=yes`)
    .then((response) => {
      console.log(response.data.current.temp_c);
      console.log(response.data.location);
      setTemp(response.data.current.temp_c)
      setCity(response.data.location.name)
      setCountry(response.data.location.country)
      setCondition(response.data.current.condition.text)
      setFeels_like(response.data.current.feelslike_c)
      setUpdate(response.data.current.last_updated)
      setSource(response.data.current.condition.icon)
    })

  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-start rounded shadow-lg' id={styles.cityData}>
        <img src={source} alt='cityImg' className='d-flex flex-row justify-content-center ms-2 mb-4' id={styles.image} />
        <div className='d-flex flex-column justify-content-center ms-4'>
          <h4 className='fw-bold'>{city} - {country}</h4>
          <p className='fs-5'>{temp}°C</p>
          <p className='fs-5'>Feels Like : {feels_like}°C</p>
          <p className=''>Last Updated : {update}</p>
        </div>
      </div>
    </div>
  )
}

export default Cities
