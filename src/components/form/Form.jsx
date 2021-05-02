import React, { useState } from 'react'

const Form = () => {

  const [ data, setData ] = useState({
    name: '',
    lastname: ''
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  
  const sendData = (e) => {
    e.preventDefault();
    console.log({ data });
  } 

  return (
    <>
     <h1>User form</h1>
      <form className = "row" onSubmit = { sendData }>
        <div className="col-md-3">
          <input 
            className = "form-control"
            type = "text"
            placeholder = "Enter your name"
            name = "name"
            onChange = { handleInputChange }
          />
          </div>
        <div className="col-md-3">
          <input 
            className = "form control"
            type="text"
            placeholder = "Enter your lastname"  
            name = "lastname"
            onChange = { handleInputChange }
          />
          </div>
        <div className="col-md-3">
          <button
            className = "btn btn-primary"
          >
            Send
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
