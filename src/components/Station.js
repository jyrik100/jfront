import {useParams} from "react-router-dom"
import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';
import { useState, useEffect } from "react"
import stationService from "../services/Stations"
import journeyService from "../services/Journeys"



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

  console.log(depCount)
  console.log(returnCount)


    return (    
      <div>
      <h2>Station</h2>
      <ul>
        <div>FID: {station.FID}</div>
        <div>ID: {station.ID}</div>
        <div>Nimi: {station.Nimi}</div>          
        <div>Namn: {station.Namn}</div>
        <div>Name: {station.Name}</div>
        <div>Osoite: {station.Osoite}</div>
        <div>Address: {station.Adress}</div>
        <div>Kaupunki: {station.Kaupunki}</div>
        <div>Stad: {station.Stad}</div>
        <div>Kapasiteet: {station.Kapasiteet}</div>
        <div>x: {station.x}</div>
        <div>y: {station.y}</div>
        <div>TripsStarting: {depCount}</div>
        <div>TripsEnding: {returnCount}</div>
      </ul>
    </div>
    )
  }
export default Station  


