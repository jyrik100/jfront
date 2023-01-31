import Journey from "./Journey"
import { useState, useEffect } from "react"
import journeyService from "../services/Journeys"

const Journeys = () => {  

  const [journeys, setJourneys] = useState([])
  const [newJourney, setNewJourney] = useState('') 

  useEffect(() => {    
    console.log('effect')    
    journeyService
    .getAllJourneys()          
    .then(response => {        
      console.log('promise fulfilled')        
      setJourneys(response.data)      
    })  
  }, [])  
  console.log('render', journeys.length, 'journeys')

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
      <h1>add new</h1>
      <form onSubmit={addJourney}>        
        <input         
          value={newJourney}
          onChange={handleJourneyChange}
        />
        <button type="submit">save</button>      
      </form> 
      <table>
      <h1>journeys</h1>
      <ul>        
        {journeys.map(journey => 
          <Journey key={journey.id} journey={journey}></Journey>
        )
        }      
      </ul>
      </table>
    </div>
    )
  }
export default Journeys