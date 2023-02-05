//import Journey from "./Journey"
import { useState, useEffect } from "react"
import journeyService from "../services/Journeys"
import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';

const Journeys = () => {  

  const [journeys, setJourneys] = useState([])
  const [newJourney, setNewJourney] = useState('');
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(10);
  
  const handlePage = (page) => setPage(page);
  const handlePageSizeChange = (event) => {setPageSize(event.target.value);}
  const totalPages = 30000 // Todo: this value should be dynamic

  useEffect(() => { 
    console.log('effect')    
    journeyService
    .getpageJourneys(page, size)          
    .then(response => {        
      console.log('promise fulfilled')        
      setJourneys(response.data)      
    })  
  }, [page,size])  
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
  const decimals = (value) => {    // fix long doubles to show 2 decimals
    return parseFloat(value.toFixed(2));
  }
    return (    
  <div>
      <h1>Add New Journey </h1>
      <form onSubmit={addJourney}>        
        <input         
          value={newJourney}
          onChange={handleJourneyChange}
        />
        <button type="submit">save</button>      
      </form> 
      <Card>
        <select name="page-size" id="page-size" onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => handlePage(value)}
        page={page}
        size="large"
      ></Pagination>
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
               <TableCell >{decimals(journey.Covered_distance_m/1000)} km</TableCell>
               <TableCell>{decimals(journey.Duration_sec/60)} min</TableCell>
             </TableRow>
            ))}
         </TableBody>
        </Table>
      </Card>    
  </div>
    )
  }
export default Journeys

