import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './Backend/CRUD'
import App from './App';
// import Variabel from './Variabel.js'
// import StateProps from './StateProps.js'
// import Map from './Map.js'
// import Lifecycle from './Backend/Lifecycle.js'


ReactDOM.render(
  <React.StrictMode>
    <Crud />
    <App />
    {/* <Variabel />
    <StateProps />
    <Map />
    <Lifecycle /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);