import React, { useState } from 'react';
import DriverForm from '../driver-form/DriverForm';
import DriverList from '../driver-list/DriverList';
import './driver.css'

const Driver = () => {
  const [drivers, setDrivers] = useState([])
  return (
    <div className = "driver-content">
      <h1>Drivers</h1>
      <div className="form-content">
        <DriverForm setDrivers = {setDrivers} drivers = {drivers}/>
        <DriverList drivers = { drivers}/>
      </div>
    </div>
  )
}

export default Driver
