import React from 'react'
import { useForm } from 'react-hook-form';
import './driver-form.css'

const DriverForm = ({setDrivers, drivers}) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  // const [ data, setData ] = useState({
  //   name: '',
  //   lastname: '',
  //   age: 0,
  //   gender: ''
  // });

  // const handleInputChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   })
  // }
  
  const sendData = (data,e) => {
    e.preventDefault();
    setDrivers([...drivers,data])
    e.target.reset();
  } 

  return (
    <>
      <form className = "driver-form" onSubmit = { handleSubmit(sendData) }>
        <div className="row">
          <label id = "name">Name</label>
          <div className="input">
            <input 
              type = "text"
              placeholder = "Enter name"
              name = "name"
              // onChange = { handleInputChange }
              {...register("name", { required: true, maxLength: 10 })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          </div>
        <div className="row">
          <label id = "lastname">Lastname</label>
          <div className="input">
            <input 
              type="text"
              placeholder = "Enter your lastname"  
              name = "lastname"
              // onChange = { handleInputChange }
              {...register("lastname", { required: true, maxLength: 10 })}
            />
            {errors.lastname && <span>This field is required</span>}
          </div>
        </div>
        <div className="row">
          <label id = "age">Age</label>
          <div className="input">
            <input 
              type="text"
              placeholder = "Enter your age"  
              name = "age"
              // onChange = { handleInputChange }
              {...register("age", { required: true, min: 1, max: 99 })}
            />
            {errors.age && <span>Age between 1 and 99</span>}
          </div>
        </div>
        <div className="row">
          <label id="gender">Gender</label>
          <div className="input">
            <input 
              type="text"
              placeholder = "Enter your gender"  
              name = "gender"
              // onChange = { handleInputChange }
              {...register("gender", { required: true, maxLength: 1 })}
            />
            {errors.gender && <span>Enter M or F</span>}
          </div>
        </div>
        <div className="button">
          <button
            className = "btn btn-primary"
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  )
}

export default DriverForm
