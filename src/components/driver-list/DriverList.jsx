import React from 'react'

const DriverList = ({drivers = [{
  name: '',
  lastname: '',
  age: 0,
  gender: ''
}]}) => {

  return (
    <div>
      <table className="table" >
        <thead>
          <tr className="head">
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
            { drivers.map( driver => (
              <tr 
                className="table-row"
                key = {driver.name}
              >
                <td>{driver.name}</td>
                <td>{driver.lastname}</td>
                <td>{driver.age}</td>
                <td>{driver.gender}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DriverList
