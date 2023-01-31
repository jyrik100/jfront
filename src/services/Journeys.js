import axios from 'axios'
const baseUrl1 = 'http://localhost:3001/api/journeys'
//const baseUrl2 = 'http://localhost:3001/api/somejourneys/1/5'  // current page 4, pagesize 5

const baseUrl2 = 'http://localhost:3001/api/pagejourneys'  // current page 4, pagesize 5

const getAllJourneys = () => {
  return axios.get(baseUrl1)
}

/* const getSomeJourneys = () => {
  return axios.get(baseUrl2)
}
 */

const getpageJourneys = (ppage, psize) => {
  return axios.get(`${baseUrl2}/${ppage}/${psize}`)
}

const exportedObject = {
    getAllJourneys, getpageJourneys
};

export default exportedObject;