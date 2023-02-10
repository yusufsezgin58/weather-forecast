import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import styles from './styles.module.css'

function Layout() {
  return (
    <div className={styles.Layout}>
      <div>
        <Header />
      </div>
      <div className='mt-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
