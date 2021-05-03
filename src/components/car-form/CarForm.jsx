import React from 'react'
import { useForm } from 'react-hook-form';
import './carform.css';

const CarForm = ({setCars, cars}) => {
  // const [ data, setData ] = useState({
  //   marca: '',
  //   modelo: '',
  //   cilindraje: 0
  // });

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // const handleInputChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   })
  // }
  
  const sendData = (data,e) => {
    e.preventDefault();
    setCars([...cars,data])
    e.target.reset();
  } 

  return (
    <>
      <form className = "car-form" onSubmit = { handleSubmit(sendData) }>
        <div className="row">
          <label id = "marca">Marca</label>
          <div className="input">
            <input 
              type = "text"
              placeholder = "Ingrese marca"
              name = "marca"
              // onChange = { handleInputChange }
              {...register("marca", { required: true, maxLength: 15 })}
            />
            {errors.marca && <span>This field is required</span>}
          </div>
          </div>
        <div className="row">
          <label id = "modelo">Modelo</label>
          <div className="input">
            <input 
              type="text"
              placeholder = "Enter your lastname"  
              name = "modelo"
              // onChange = { handleInputChange }
              {...register("modelo", { required: true, maxLength: 15 })}
            />
            {errors.modelo && <span>This field is required</span>}
          </div>
        </div>
        <div className="row">
          <label id="cilindraje">Cilindraje</label>
          <div className="input">
            <input 
              type="number"
              placeholder = "Enter your lastname"  
              name = "cilindraje"
              // onChange = { handleInputChange }
              {...register("cilindraje", { required: true,  min: 1, max: 5000 })}
            />
            {errors.cilindraje && <span>Invalid value</span>}
          </div>
        </div>
        <div className="button">
          <button>
            Agregar
          </button>
        </div>
      </form>
    </>
  )
}

export default CarForm
