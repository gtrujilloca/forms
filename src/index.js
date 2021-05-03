import React from 'react';
import ReactDOM from 'react-dom';
import Car from './components/car/Car';
import Driver from './components/driver/Driver'
import './index.css';

ReactDOM.render(
    <div >
      <Car />
      <Driver />
    </div>,
  document.getElementById('root')
);
