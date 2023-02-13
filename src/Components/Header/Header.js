import React, { useContext } from 'react'
import ThemeContext from '../../Context/Context'
import styles from './styles.module.css'

function Header() {

  const { city_name, setCity_name } = useContext(ThemeContext)

  return (
    <div id={styles.Header} className='d-flex flex-row justify-content-between align-items-center shadow-lg py-2 h-auto px-2'>
      <div id={styles.headerLeft} className={"ps-5 mt-3 align-items-center"}>
        <h4 className='fs-2 text-white'>Weather Forecast</h4>
      </div>
      <div id={styles.headerRight} className={"d-flex flex-row justify-content-end align-items-center mt-2"}>
        <input type="text" onChange={(e) => {
          setCity_name(e.target.value)
        }} className="form-control me-3" placeholder="City Name" aria-label="Username" value={city_name}/>
      </div>
    </div>
  )
}

export default Header
