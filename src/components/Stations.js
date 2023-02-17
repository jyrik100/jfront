import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';
import { useState, useEffect } from "react"
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import stationService from "../services/Stations"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';


const Stations = () => {  
  const [stations, setStations] = useState([])
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(10);
  

  const handlePage = (page) => setPage(page);
  const handlePageSizeChange = (event) => {setPageSize(event.target.value);}
  //const totalPages = 30000 // Todo: this value should be dynamic
  useEffect(() => { 
    stationService
    .getpageStations(page, size)          
    .then(response => {        
      setStations(response.data)      
    })  
  }, [page,size]) 
  useEffect(() => { 
    console.log('effect')    
    stationService
    .getpageStationspages(size)
    .then(response => {        
      setPageCount(response.data)        
    })  
  }, [page,size])  


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
        count={pageCount}
        onChange={(event, value) => handlePage(value)}
        page={page}
        size="large"
      ></Pagination>
       <Table>
         <TableHead>
           <TableRow>
             <StyledTableCell>ID</StyledTableCell>
             <StyledTableCell>Station name</StyledTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {stations.map((station) => (
             <StyledTableRow key={station.ID}>
               <TableCell>{station.ID}</TableCell>
               <TableCell><Link to={`/stations/${station.FID}`}>{station.Name}</Link></TableCell>
             </StyledTableRow>
            ))}
         </TableBody>
        </Table>
      </Card>    
    </div>  
   )
  }
export default Stations  