import axios from 'axios'
const baseUrl1 = 'http://localhost:3001/api/stations'
const baseUrl2 = 'http://localhost:3001/api/pagestations'

const getAllStations = () => {
  return axios.get(baseUrl1)
}

const getpageStations = (ppage, psize) => {
  return axios.get(`${baseUrl2}/${ppage}/${psize}`)
}


const exportedObject = {
    getAllStations, getpageStations
};

export default exportedObject;