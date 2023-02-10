import React from 'react'
import styles from './styles.module.css'
import image from '../../img/d9d282bfd1842ef06e706a12679e7e49.jpg'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className={`${styles.mainDiv} d-flex flex-row justify-content-center mt-4`}>
      <h2 className='text-white'>Do you want to see your city's weather forecast <Link to={"/cities"} id={styles.Button}>
        <span class="badge bg-success">Details</span>
      </Link></h2>
    </div>
  )
}

export default Main
