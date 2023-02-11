import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';
import stationService from "../services/Stations"
import { useState, useEffect } from "react"
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"


const Stations = ({stations}) => {  
   return (    
    <div>
      <h2>Stations</h2>
      <Card>
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
               <TableCell><Link to={`/stations/${station.FID}`}> {station.Name}</Link></TableCell>
             </TableRow>
            ))}
         </TableBody>
        </Table>
      </Card>    
    </div>  
   )
  }
export default Stations  


