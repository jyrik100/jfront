import Journey from "./Journey"
import { useState, useEffect } from "react"
import journeyService from "../services/Journeys"
import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination} from '@mui/material';

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
      <Card>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>Departure Time</TableCell>
             <TableCell>Return Time</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {journeys.map((journey) => (
             <TableRow key={journey.id}>
               <TableCell>{journey.id}</TableCell>
               <TableCell>{journey.Departure}</TableCell>
               <TableCell>{journey.Return}</TableCell>
             </TableRow>
           ))}
         </TableBody>
        </Table>
       <TablePagination     
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={journeys.length}
        rowsPerPage={5}
        page={2}/>
      </Card>    
  </div>
    )
  }
export default Journeys

