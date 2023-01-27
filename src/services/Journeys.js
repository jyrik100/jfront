import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/journeys'

const getAllJourneys = () => {
  return axios.get(baseUrl)
}

const exportedObject = {
    getAllJourneys
};

export default exportedObject;