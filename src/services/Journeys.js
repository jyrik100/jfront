import axios from 'axios'
const baseUrl1 = 'http://localhost:3001/api/journeys'
const baseUrl2 = 'http://localhost:3001/api/pagejourneys'  // pass the page and size 

const getAllJourneys = () => {
  return axios.get(baseUrl1)
}

const getpageJourneys = (ppage, psize) => {
  return axios.get(`${baseUrl2}/${ppage}/${psize}`)
}

const exportedObject = {
    getAllJourneys, getpageJourneys
};

export default exportedObject;