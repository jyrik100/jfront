import stationService from "../services/Stations"
import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

//const Stations = ({stations}) => {  

const Stations = ({stations}) => {  
  console.log(stations)

   return (    
      <div>
      <h2>Stations</h2>
      <ul>
        {stations.map(station =>
          <li key={station.ID}>
            {station.FID} <Link to={`/stations/${station.FID}`}> :{station.Name} </Link>
            <div>StationID: {station.ID}</div>
          </li>
        )}
      </ul>
    </div>
  
    )
  }
export default Stations  

