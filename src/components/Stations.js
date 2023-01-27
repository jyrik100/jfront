
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"


const Stations = ({stations}) => {  

   return (    
      <div>
      <h2>Stations</h2>
      <ul>
        {stations.map(station =>
          <li key={station.id}>
            <Link to={`/stations/${station.id}`}>Station: {station.name} City: {station.city}</Link>
          </li>
        )}
      </ul>
    </div>
  
    )
  }
export default Stations  

