import { useState } from "react"
import Journey from "./components/Journey"


const App = (props) => {

  const [journeys, setJourneys] = useState(props.journeys)
  const [newJourney, setNewJourney] = useState() 

  const addJourney = (event) => {    
    event.preventDefault()
    const journeyObject = {
      departure: newJourney,
      id: journeys.length + 1,
    }
  
    setJourneys(journeys.concat(journeyObject))
    setNewJourney('')
  }

  const handleJourneyChange = (event) => {    
    setNewJourney(event.target.value)  
  }

  return (
    <div>
      <h1>journeys</h1>
      <ul>        
        {journeys.map(journey => 
          <Journey key={journey.id} journey={journey}></Journey>
        )}      
      </ul>
      <h1>add new</h1>
      <form onSubmit={addJourney}>        
        <input         
          value={newJourney}
          onChange={handleJourneyChange}
        />
        <button type="submit">save</button>      
      </form> 
    </div>
  )
}

export default App