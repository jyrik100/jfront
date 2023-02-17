import axios from 'axios'
const baseUrl1 = 'http://localhost:3001/api/stations'
const baseUrl2 = 'http://localhost:3001/api/pagestations'
const baseUrl3 = 'http://localhost:3001/api/pagestationsspages'

const getAllStations = () => {
  return axios.get(baseUrl1)
}

const getpageStations = (ppage, psize) => {
  return axios.get(`${baseUrl2}/${ppage}/${psize}`)
}

const getpageStationspages = (psize) => {
  return axios.get(`${baseUrl3}/${psize}`)
}

const exportedObject = {
    getAllStations, getpageStations, getpageStationspages
};

export default exportedObject;