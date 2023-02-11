import Stations from "./components/Stations"
import Station from "./components/Station"
import {
BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import Journeys from "./components/Journeys"
import stationService from "./services/Stations"
import { useState, useEffect } from "react"
import './index.css'
import { padding } from "@mui/system"
/* const stations = [
  {
    FID:1,
    ID: 120,
    Nimi: "Hanasaari",
    Namn: "Hanaholmen",
    Name: "Hanasaari",
    Osoite: "Hanasaarenranta 1",
    Address: "Hanaholmsstranden 1",
    Kaupunki: "Espoo",
    Stad: "Esbo",
    Operaattor: "CityBikeFinland",
    Kapasiteet: "10",
    x: "24.840319",
    y: "60.16582",
  }
  ,
  {
    FID:2,
    ID: 122,
    Nimi: "Saari",
    Namn: "Hanaholmens",
    Name: "Saari",
    Osoite: "Hanasaarenranta 1",
    Address: "Hanaholmsstranden 1",
    Kaupunki: "Espoo",
    Stad: "Esbo",
    Operaattor: "CityBikeFinland",
    Kapasiteet: "10",
    x: "24.840319",
    y: "60.16582",
  }
]  */




const App = () => {
  const [stations, setStations] = useState([])
  useEffect(() => { 
  stationService
  .getAllStations()
  .then(response => {        
    setStations(response.data)      
  })  
  }, [])  

  const padding = {
    color: 'black',
    fontStyle: 'arial',
    fontSize: 24,
    padding: 10
  }
  return (
    <Router>
    <div>
      <Link style={padding} to="/journeys">JourneysList</Link>
      <Link style={padding} to="/stations">StationsList</Link>
    </div>
    <Routes>    
      <Route path="/stations/:id" element={<Station stations={stations} />} />
      <Route path="/journeys" element={<Journeys />} />
      <Route path="/stations" element={<Stations stations={stations} />} />
    </Routes>
  </Router>
  )
}

export default App