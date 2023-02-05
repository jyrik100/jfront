import axios from 'axios'
const baseUrl1 = 'http://localhost:3001/api/stations'

const getAllStations = () => {
  return axios.get(baseUrl1)
}


const exportedObject = {
    getAllStations
};

export default exportedObject;