//import Journey from "./Journey"
import { useState, useEffect } from "react"
import journeyService from "../services/Journeys"
import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Journeys = () => {  

  const [journeys, setJourneys] = useState([])
  const [newJourney, setNewJourney] = useState('');
  const [newValue, setNewValue] = useState('');
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(10);
  
  const handlePage = (page) => setPage(page);
  const handlePageSizeChange = (event) => {setPageSize(event.target.value);}
//  const totalPages = 30000 // Todo: this value should be dynamic

  useEffect(() => { 
    console.log('effect')    
    journeyService
    .getpageJourneys(page, size)
    .then(response => {        
      console.log('promise fulfilled')        
      setJourneys(response.data)      
    })  
  }, [page,size, newValue])  
  console.log('render', journeys.length, 'journeys')

  useEffect(() => { 
    console.log('effect')    
    journeyService
    .getJourneyspagescount(size)
    .then(response => {        
      setPageCount(response.data)        
    })  
    setNewValue('')

  }, [page,size,newValue])  

  const addJourney = (event) => {    
    event.preventDefault()
    const journeyObject = {
      id: journeys.length + 1,
      departure: "2021-06-01T00:05:46",
      return: "2021-06-01T00:05:46",    
      departureStation_ID: "094",    
      departureStation_Name: "Laajalahden Aukio",    
      returnStation_ID: "100",    
      returnStation_Name: "Teljäntie",    
      coveredDistance_Meters: "20243",    
      duration_Seconds: "520"
 
    }
    
    journeyService      
    .createJourney(journeyObject)      
    .then(response => {        
 //     setJourneys(journeys.concat(journeyObject))
      setNewValue(1)
      setNewJourney('')
    })
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
      <h1>Current Journeys </h1>
      <Card>
        <select name="page-size" id="page-size" onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      <Pagination
        color="primary"
        count={pageCount}
        onChange={(event, value) => handlePage(value)}
        page={page}
        size="large"
      ></Pagination>
       <Table>
         <TableHead>
           <TableRow>
             <StyledTableCell>Id</StyledTableCell>
             <StyledTableCell>From Station</StyledTableCell>
             <StyledTableCell>Departure Time</StyledTableCell>
             <StyledTableCell>Return Station</StyledTableCell>
             <StyledTableCell>Return Time</StyledTableCell>
             <StyledTableCell>Distance</StyledTableCell>
             <StyledTableCell>Durance</StyledTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {journeys.map((journey) => (
             <StyledTableRow key={journey.id}>
               <StyledTableCell >{journey.id}</StyledTableCell>
               <StyledTableCell >{journey.Departure_station_name}</StyledTableCell>
               <StyledTableCell >{journey.Departure}</StyledTableCell>
               <StyledTableCell >{journey.Return_station_name}</StyledTableCell>
               <StyledTableCell >{journey.Return}</StyledTableCell>
               <StyledTableCell  >{decimals(journey.Covered_distance_m/1000)} km</StyledTableCell>
               <StyledTableCell >{decimals(journey.Duration_sec/60)} min</StyledTableCell>
             </StyledTableRow>
            ))}
         </TableBody>
        </Table>
      </Card>    
  </div>
    )
  }
export default Journeys

