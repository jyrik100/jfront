import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const promise = axios
  .get('http://localhost:3001/journeys1')
  .then(response => {
   const journeys2 = response.data
   console.log(journeys2)
  })
console.log(promise)


let journeys1 = [  
  {    
    id: 1,    
    departure: "2021-05-31T23:57:25",    
    return: "2021-06-01T00:05:46",    
    departureStation_ID: "094",    
    departureStation_Name: "Laajalahden aukio",    
    returnStation_ID: "100",    
    returnStation_Name: "Teljäntie",    
    coveredDistance_Meters: 2043,    
    duration_Seconds: 500,    
  },
  {    
    id: 2,    
    departure: "2021-05-31T23:57:25",    
    return: "2021-06-01T00:05:46",    
    departureStation_ID: "094",    
    departureStation_Name: "Laajalahden aukio",    
    returnStation_ID: "100",    
    returnStation_Name: "Teljäntie",    
    coveredDistance_Meters: 20243,    
    duration_Seconds: 520,    
  }  
]




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App journeys={journeys1} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



