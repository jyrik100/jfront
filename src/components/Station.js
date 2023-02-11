import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import journeyService from "../services/Journeys"
import stationService from "../services/Stations"
import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';

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
      <div>
       <ul>
        <div>station: <b>{station.Nimi}</b></div>
        <div>FID: {station.FID}</div>
        <div>ID: {station.ID}</div>
        <div>---------------------------------</div>
        <div>Nimi/Namn/Name: {station.Nimi}/{station.Namn}/{station.Name}</div>          
        <div>---------------------------------</div>
        <div>Osoite/Address: {station.Osoite}/{station.Adress}</div>
        <div>Kaupunki/Stad: {station.Kaupunki}/{station.Stad}</div>
        <div>Kapasiteet: {station.Kapasiteet}</div>
        <div>---------------------------------</div>
        <div>Coordinates to this station </div>
        <div>x: {station.x}</div>
        <div>y: {station.y}</div>
        <div>---------------------------------</div>
        <div>Number of Journeys from this station: </div>
        <div>* TripsStarting: {depCount}</div>
        <div>* TripsEnding: {returnCount}</div>
       </ul>
      </div>
    )
}
export default Station  