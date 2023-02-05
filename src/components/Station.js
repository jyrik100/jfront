import {useParams} from "react-router-dom"
import {Card,Table,TableHead,TableBody,TableRow,TableCell,TablePagination, Pagination} from '@mui/material';
import { useState, useEffect } from "react"
import stationService from "../services/Stations"



const Station = ({stations}) => {  
  console.log(stations)
  const id = useParams().id  
  const station = stations.find(n => n.FID === id)

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
      </ul>
    </div>
    )
  }
export default Station  


