import React, { useState } from 'react'
import CarForm from '../car-form/CarForm';
import CarList from '../car-list/CarList';
import './car.css'

const Car = () => {
  const [cars, setCars] = useState([])

  return (
    <div className="car-content">
      <h1>Cars</h1>
      <div className="form-content">
        <CarForm setCars = { setCars } cars = {cars}/>
        <CarList cars= { cars }/>
      </div>
    </div>
  )
}

export default Car
