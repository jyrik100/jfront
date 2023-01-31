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
      <TablePagination     
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={journeys.length}
        rowsPerPage={5}
        page={2}/>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>Id</TableCell>
             <TableCell>From Station</TableCell>
             <TableCell>Departure Time</TableCell>
             <TableCell>Return Station</TableCell>
             <TableCell>Return Time</TableCell>
             <TableCell>Distance</TableCell>
             <TableCell>Durance</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {journeys.map((journey) => (
             <TableRow key={journey.id}>
               <TableCell>{journey.id}</TableCell>
               <TableCell>{journey.Departure_station_name}</TableCell>
               <TableCell>{journey.Departure}</TableCell>
               <TableCell>{journey.Return_station_name}</TableCell>
               <TableCell>{journey.Return}</TableCell>
               <TableCell>{journey.Covered_distance_m/1000} km</TableCell>
               <TableCell>{journey.Duration_sec/60} min</TableCell>
             </TableRow>
           ))}
         </TableBody>
        </Table>
      </Card>    
  </div>
    )
  }
export default Journeys

