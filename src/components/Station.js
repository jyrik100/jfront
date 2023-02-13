import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import journeyService from "../services/Journeys"
import stationService from "../services/Stations"
import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color } from "@mui/system";
import { blue, blueGrey } from "@mui/material/colors";


const Station = ({stations}) => {  
  const [depCount, setDepCount] = useState()
  const [returnCount, setReturnCount] = useState()
  const id = useParams().id  
  const station = stations.find(n => n.FID === id)
  
  useEffect(() => { 
   journeyService
   .getJourneysCount(station.ID)
   .then(response => {    
    setDepCount(response.data.departCount)
    setReturnCount(response.data.returnCount)
   })  
  }, [])  

    return (    
    <Card 
        sx={{ maxWidth: 700 }} 
        style={{backgroundColor:   "#e8f8f5"}} 
        boxShadow={ "0 8px 40px -12px rgba(0,0,0,0.3)"}
    >
      <CardMedia sx={{ height: 20 }}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Station {station.Nimi}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
            <ul>
              <div>FID: {station.FID}</div>
              <div>ID: {station.ID}</div>
              <div>Nimi: {station.Nimi}/{station.Namn}/{station.Name}</div>          
              <div>Osoite: {station.Osoite}/{station.Adress}</div>
              <div>Kaupunki: {station.Kaupunki}/{station.Stad}</div>
              <div>Kapasiteet: {station.Kapasiteet}</div>
              <div>Coordinates to this station </div>
              <div> x: {station.x}</div>
              <div> y: {station.y}</div>
              <div>Number of Journeys from this station: </div>
              <div>* TripsStarting: {depCount}</div>
              <div>* TripsEnding: {returnCount}</div>
            </ul>
          </div>
        </Typography>
      </CardContent>
    </Card>    )
}
export default Station  