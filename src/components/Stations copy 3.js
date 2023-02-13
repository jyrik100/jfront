import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';
import { useState, useEffect } from "react"
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import stationService from "../services/Stations"


const Stations = () => {  
  const [stations, setStations] = useState([])
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(10);

  const handlePage = (page) => setPage(page);
  const handlePageSizeChange = (event) => {setPageSize(event.target.value);}
  const totalPages = 30000 // Todo: this value should be dynamic
  useEffect(() => { 
    stationService
    .getpageStations(page, size)          
    .then(response => {        
      setStations(response.data)      
    })  
  }, [page,size])  
  
   return (    
    <div>
      <h2>Stations</h2>
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
             <TableCell>ID</TableCell>
             <TableCell>Station Name</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {stations.map((station) => (
             <TableRow key={station.ID}>
               <TableCell>{station.ID}</TableCell>
               <TableCell><Link to={`/stations/${station.FID}`}>{station.Name}</Link></TableCell>
             </TableRow>
            ))}
         </TableBody>
        </Table>
      </Card>    
    </div>  
   )
  }
export default Stations  