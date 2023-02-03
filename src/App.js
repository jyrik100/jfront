import Stations from "./components/Stations"
import Station from "./components/Station"
import {
BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import Journeys from "./components/Journeys"

const stations = [
  {
    id: 1,
    name: "TampereRail",
    city: "Tampere"

  }
  ,
  {
    id: 2,
    name: "HelsinkiRail",
    city: "Helsinki"
  }
] 




const App = () => {
  const padding = {padding: 5}
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