import {useParams} from "react-router-dom"

const Station = ({stations}) => {  
  const id = useParams().id  
  const station = stations.find(n => n.id === Number(id))

    return (    
      <div>
      <h2>Station</h2>
      <ul>
        id: {station.id}  name: {station.name} city: {station.city}
      </ul>
    </div>
    )
  }
export default Station  