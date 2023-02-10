import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Header() {
  return (
    <div className='d-flex flex-row justify-content-center mt-4' id={styles.header}>
      <div className='ps-5'>
        <Link className={"text-decoration-none"} to={"/"}>
          <h4 className='fw-bold bg-success px-4 py-3 text-white rounded'>Weather Forecast Application</h4>
        </Link>
      </div>
    </div>
  )
}

export default Header
