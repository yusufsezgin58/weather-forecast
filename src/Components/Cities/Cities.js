import React, { useState } from 'react'
import styles from './styles.module.css'
import image from '../../img/d9d282bfd1842ef06e706a12679e7e49.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Cities() {

  const [temp, setTemp] = useState()
  const [city, setCity] = useState("")
  const [city_name, setCity_name] = useState("")
  const [country, setCountry] = useState("")
  const [condition, setCondition] = useState("")
  const [feels_like, setFeels_like] = useState("")
  const [update, setUpdate] = useState("")
  const [source, setSource] = useState("")

  const onClick = () => {
    axios(`https://api.weatherapi.com/v1/current.json?key=a93d3413df7840d3a02183035231901&q=${city_name}&aqi=yes`)
      .then((response) => {
        console.log(response.data.current.temp_c);
        setTemp(response.data.current.temp_c)
        setCity(response.data.location.name)
        setCountry(response.data.location.country)
        setCondition(response.data.current.condition.text)
        setFeels_like(response.data.current.feelslike_c)
        setUpdate(response.data.current.last_updated)
        setSource(response.data.current.condition.icon)
      })
  }
  return (
    <div className='d-flex flex-column' id={styles.general}>
      <div className='d-flex justify-content-center align-items-start' id={styles.search}>
        <div className='' id={styles.input}>
          <label className='fs-3 mb-2 text-white'>City Name</label>
          <input type={"text"} placeholder='Istanbul' onChange={(e) => { setCity_name(e.target.value) }} value={city_name} className='form-control' />
          <button className='btn btn-success float-end px-3 fs-5 py-2 mt-3' onClick={onClick}>See</button>
        </div>

        <div className='d-flex flex-row justify-content-center px-5' id={styles.card2}>
          <div className="card p-1 d-flex flex-column bg-success justify-content-center align-items-center" id={styles.card}>
            <img src={source} class="card-img-top bg-success m-2" id={styles.image} alt="..." />
            <div className="card-body bg-success">
              <hr />
              <h3 className='fw-bold text-center pt-2 text-white bg-success'>{city} / {country}</h3>
              <h6 className='fw-normal text-center pt-2 bg-success text-white'>Temperature : {temp}°C</h6>
              <h6 className='fw-normal text-center pt-2 bg-success text-white'>Condition : {condition}</h6>
              <h6 className='fw-normal text-center pt-2 bg-success text-white'>Feels Like : {feels_like}°C</h6>
              <h6 className='fw-normal text-center pt-2 bg-success text-white'>Last Updated : {update}</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cities
