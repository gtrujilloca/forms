import React from 'react'
import './car-list.css'

const CarList = ({cars = [{
  marca: '',
  modelo: '',
  cilindraje: 0
}]}) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="head">
            <th>Marca</th>
            <th>modelo</th>
            <th>Cilindraje</th>
          </tr>
        </thead>
        <tbody>
            { cars.map( car => (
              <tr 
                key = {car.modelo}
                className="table-row"  
              >
                <td>{car.marca}</td>
                <td>{car.modelo}</td>
                <td>{car.cilindraje}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CarList
