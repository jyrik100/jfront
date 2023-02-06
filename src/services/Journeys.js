import axios from 'axios'
const baseUrl1 = 'http://localhost:3001/api/journeys'
const baseUrl2 = 'http://localhost:3001/api/pagejourneys'  // pass the page and size 
const baseUrl3 = 'http://localhost:3001/api/journeysstation'  // pass the page and size 

const getAllJourneys = () => {
  return axios.get(baseUrl1)
}

const getpageJourneys = (ppage, psize) => {
  return axios.get(`${baseUrl2}/${ppage}/${psize}`)
}

const getJourneysCount = (stationID) => {
  return axios.get(`${baseUrl3}/${stationID}`)
}

const exportedObject = {
    getAllJourneys, getpageJourneys, getJourneysCount
};

export default exportedObject;