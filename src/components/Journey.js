// at the moment this is not in use
const Journey = ({ journey }) => {  
    return (    
    <li>
     <div>
       id: {journey.id}
     </div>
       departureTime: {journey.Departure}
     <div>
       departureFrom: {journey.Departure_station_name}
     </div>
     <div>
      returnTime: {journey.Return}     
     </div>
     <div>
      returnTo: {journey.Return_station_name}      
     </div>
     <div>
      covered distance: {journey.Covered_distance_m/1000} km     
     </div>
     <div>
      covered durance: {journey.Duration_sec/60} min     
     </div>
    </li>  
    )
  }
export default Journey  


